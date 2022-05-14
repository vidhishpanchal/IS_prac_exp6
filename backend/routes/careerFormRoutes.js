const express = require("express");
const { careerForm } = require("../controllers/careerFormController");

const router = express.Router();

// Create new course - Only for instructors
router.route("/careerForm").post(careerForm);

module.exports = router;
