const asyncHandler = require("express-async-handler");
const Testimonial = require("../models/testimonialModel");
const Order = require("../models/orderModel");
/*
LIST OF CONTROLLERS
1. Get all testimonials of a course
2. post testimonial
*/

// 1. Get all testimonials - unprotected
  const getAllTestimonails = asyncHandler(async (req, res) => {
    const {courseId} = req.params
    const testimonials = await Testimonial.find({courseId}).populate('userId courseId')
    res.status(200).json({
        success: true,
        data: testimonials
    })
  }); 

// 2.post a testimonial - Users who have taken the course.
const postTestimonial = asyncHandler(async (req, res) => {
    const {courseId, heading, description} = req.body
    if(!courseId || !heading || !description) {
        return res.status(400).json({
            success: false,
            error: "Enter all details"
        })
    }
    if(heading==="" || description==="") {
        return res.status(400).json({
            success: false,
            error:"Empty Feilds not allowed"
        })
    }
    const pair = await Order.find({courseId,userId:req.user._id})
    if(!pair.length) {
        return res.status(400).json({
            success: false,
            error: "No such course"
        })
    }
    const testimonial = new Testimonial({
        userId: req.user._id,
        courseId,
        heading,
        description
    })

    await testimonial.save();
    const data = await testimonial.populate('userId courseId')

    return res.status(200).json({
        success: true,
        data: data
    })
});

module.exports = {
    getAllTestimonails,
    postTestimonial 
};
