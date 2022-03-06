const mongoose = require("mongoose");

const dailyCalories = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  calories: {
    target: {
      type: Number,
      default: 0,
      required: true,
    },
    consumed: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  food: [
    {
      name: {
        type: String,
      },
      calories: {
        type: Number,
      },
    },
  ],
  exercise: [
    {
      name: {
        type: String,
      },
      caloriesBurnt: {
        type: Number,
      },
    },
  ],
});

const CaloriesSchema = mongoose.model("dailyCalories", dailyCalories);
module.exports = CaloriesSchema;
