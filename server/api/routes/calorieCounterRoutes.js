const express = require("express");
const router = express.Router();

const controller = require("../controller/calorieCounterController");

router.post("/addFood", controller.addFood);

module.exports = router;
