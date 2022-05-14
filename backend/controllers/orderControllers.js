const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");
const Order = require("../models/orderModel");
const User = require("../models/userModel");

/*
LIST OF CONTROLLERS
1. Create a order
2. Get all orders
3. Get all courses of a Student
4. Get all students enrolled in a course
5. Count of students enrolled in a particular course
6. Check if user is enrolled in the course or not
7. Get all courses of a instructor
*/

// 1. Create a new order
const createOrder = asyncHandler(async (req, res) => {
  const {
    date,
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    courseId,
  } = req.body;

  const enrollment = await Order.find({ userId: req.user._id, courseId });

  if (enrollment.length > 0) {
    return res.status(400).json({
      success: false,
      error: "User has already taken the course",
    });
  }

  const course = await Course.find({ courseId });

  if (!course) {
    return res.status(400).json({
      success: false,
      message: "No such user or course found",
    });
  }

  const newOrder = new Order({
    userId: req.user._id,
    courseId,
    // paymentId,
    date,
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
  });

  await newOrder.save();
  // console.log(req.user);

  return res.status(200).json({
    success: true,
    data: newOrder,
  });
});

// 2. Get all orders - Only Admin
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate([{path:'userId', select:'name'}, {path:'courseId', select:'_id name instructorId price'}])  ;
  res.status(200).json({
    success: true,
    data: orders,
  });
});

// 3. Get all courses of a particular user
const getAllCoursesOfUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const orders = await Order.find({ userId }).populate("courseId");
  res.status(200).json({
    success: true,
    data: orders,
  });
});

// 4. Get All Users Enrolled in a course
const getAllUsersEnrolledInCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const orders = await Order.find({ courseId }).populate("userId");
  res.status(200).json({
    success: true,
    data: orders,
  });
});

// 5. get count of users enrolled in a course
const countOfUsersEnrolledInCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const count = await Order.countDocuments({ courseId });
  res.status(200).json({
    success: true,
    data: count,
  });
});

// 6. Check if user is enrolled in the course or not
const checkIfUserIsEnrolledInCourse = asyncHandler(async (req, res) => {
  const { courseId, userId } = req.body;

  const order = await Order.find({ courseId, userId });
  if (order) {
    res.status(200).json({
      success: true,
      data: order,
    });
  } else {
    res.status(200).json({
      success: false,
    });
  }
});


module.exports = {
  createOrder,
  getAllOrders,
  getAllCoursesOfUser,
  getAllUsersEnrolledInCourse,
  countOfUsersEnrolledInCourse,
  checkIfUserIsEnrolledInCourse,
};
