const express = require("express");
const router = express.Router();

const controller = require("../controller/calorieCounterController");

router.post("/addFood", controller.addFood);
router.post("/addExercise", controller.addExercise);
router.get("/getFood", controller.getFood);
router.post("/addGoal", controller.addGoal);

module.exports = router;
