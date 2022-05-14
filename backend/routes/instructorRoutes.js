const express = require("express");

const {
    getAllCoursesByInstructor
} = require("../controllers/instructorControllers");

const router = express.Router();


// Get all courses by a particular instructor
router.route("/getAllCoursesByInstructor/:instructorId").get(getAllCoursesByInstructor);

module.exports = router;
