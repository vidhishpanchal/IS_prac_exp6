const express = require("express");

const {
    getAllTestimonails,
    postTestimonial 
} = require("../controllers/testimonialControllers");

const { protect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Get all testimonials - - unprotected
router.route("/getAllTestimonails/:courseId").get(getAllTestimonails);

// Answer a question - all users
router.route("/postTestimonial").post(protect,postTestimonial);

module.exports = router;
