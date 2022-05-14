const express = require("express");

const { contacUs } = require("../controllers/contacFormController");

const router = express.Router();

// Create new course - Only for instructors
router.route("/contacForm").post(contacUs);

module.exports = router;
