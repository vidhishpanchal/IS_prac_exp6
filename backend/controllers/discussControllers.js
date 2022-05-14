const asyncHandler = require("express-async-handler");
const Discuss = require("../models/discussModel");
const Order = require("../models/orderModel");

/*
LIST OF CONTROLLERS
1. Ask a question.
2. Answer a question
3. Get all questions of a Course
*/

// 1. Ask a question - Logged in users
  const askQuestion = asyncHandler(async (req, res) => {
    const {courseId, question} = req.body;
    if(!courseId || !question || question==="") {
      return res.status(400).json({
        success: false,
        data: "Enter question details properly"
      })
    }

    const order = await Order.find({courseId,userId:req.user._id})
    if(!order.length) {
      return res.status(400).json({
        success: false,
        error: "User not enrolled"
      })
    }

    const newQuestion = new Discuss({
      courseId,
      question,
      userId: req.user._id,
      question,
      answer: []
    })

    await newQuestion.save();

    const data = await newQuestion.populate('courseId userId')

    return res.status(200).json({
      success: true,
      data: data
    })
  }); 

// 2.Answer a question - Logged in users
const answerQuestion = asyncHandler(async (req, res) => {
    const {id, answer, courseId} = req.body // discussId
    if(!id || !answer || answer==="") {
      return res.status(400).json({
        success:"false",
        error:"Empty Answer"
      })
    }

    const order = await Order.find({courseId,userId:req.user._id})
    if(!order.length) {
      return res.status(400).json({
        success: false,
        error: "User not enrolled"
      })
    }

    const updated = await Discuss.findByIdAndUpdate(id,{$push:{"answers":{userId:req.user._id,answer}}},{new : true}).populate('answers.userId')
    if(!updated) {
      return res.status(400).json({
        success: false,
        error: "No such question"
      })
    }
    const ans = updated.answers[0]
    return res.status(200).json({
      success: true,
      data: ans
    })
  });

// 3. Get all questions anwers of a Course - Logged in users
const getAllQuestionsAnswers = asyncHandler(async (req,res)=> {
  const {courseId} = req.params;
  if(!courseId) {
    return res.status({
      success: false,
      error: "No such course"
    })
  }
  // console.log("user",req.user)
  // console.log("ci",courseId)
  const order = await Order.find({courseId,userId:req.user._id})
  if(!order.length) {
    return res.status(400).json({
      success: false,
      error: "User not enrolled"
    })
  }

  const questionsAnswers = await Discuss.find({courseId}).populate('userId answers.userId')
  if(!questionsAnswers) {
    return res.status(400).json({
      success: false,
      error: "No such course pair"
    })
  }
  return res.status(200).json({
    success: true,
    data: questionsAnswers
  })
})


module.exports = {
  askQuestion,
  answerQuestion,
  getAllQuestionsAnswers
};
