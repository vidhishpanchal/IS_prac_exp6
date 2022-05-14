const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Course = require("../models/courseModel");

/*
LIST OF CONTROLLERS
1.  Get all courses of an instructor
*/

// 1. Get all courses of an instructor
const getAllCoursesByInstructor = asyncHandler(async (req, res) => {
    const {instructorId} = req.params
    const courses = await Course.find({instructorId})
    res.status(200).json({
        success: true,
        data: courses
    })
});

module.exports = {
    getAllCoursesByInstructor
};

