const express = require("express");

const {
    askQuestion,
    answerQuestion,
    getAllQuestionsAnswers
} = require("../controllers/discussControllers");

const { protect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Ask Question - logged in users
router.route("/askQuestion").post(protect, askQuestion);

// Answer a question - all users
router.route("/answerQuestion").post(protect,answerQuestion);

// Get all questions answers of a Course - logged in
router.route("/getAllQuestionsAnswers/:courseId").get(protect,getAllQuestionsAnswers);


module.exports = router;