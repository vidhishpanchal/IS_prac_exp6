const express = require("express");

const {
  createOrder,
  getAllOrders,
  getAllCoursesOfUser,
  getAllUsersEnrolledInCourse,
  countOfUsersEnrolledInCourse,
  checkIfUserIsEnrolledInCourse,
} = require("../controllers/orderControllers");

const { protect } = require("../middlewares/protectedRoutes");
const { instructorProtect } = require("../middlewares/protectedRoutes");
const { adminProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new order
router.route("/createOrder").post(protect, createOrder);

// Get all orders - only admin
router.route("/getAllOrders").get(adminProtect, getAllOrders);

// Get all courses of a particular user
router.route("/getAllCoursesOfUser/:userId").get(getAllCoursesOfUser);

// Get all Users Enrolled in a course - for instructor
router
  .route("/getAllUsersEnrolledInCourse/:courseId")
  .get(instructorProtect, getAllUsersEnrolledInCourse);

// Get Count of users in a course
router
  .route("/countOfUsersEnrolledInCourse/:courseId")
  .get(countOfUsersEnrolledInCourse);

// Check if user is enrolled in the course or not
router
  .route("/checkIfUserIsEnrolledInCourse")
  .get(checkIfUserIsEnrolledInCourse);

module.exports = router;
