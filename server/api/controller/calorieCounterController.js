let calories = require("../models/calorieCounterModel");

const addFood = function (req, res) {
  const request = req.body;
  calories.findOneAndUpdate(
    { date: request.date, uuid: request.uuid },
    {
      $push: { food: request.food },
      $inc: { "calories.consumed": request.food.calories },
    },
    { upsert: true, new: true },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    }
  );
};

const addExercise = function (req, res) {
  const request = req.body;
  calories.findOneAndUpdate(
    { date: request.date, uuid: request.uuid },
    {
      $push: { exercise: request.exercise },
      $inc: { "calories.consumed": -request.exercise.caloriesBurnt },
    },
    { upsert: true, new: true },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    }
  );
};

const getFood = function (req, res) {
  calories.findOne(
    { date: req.query.date, uuid: req.query.uuid },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    }
  );
};

const addGoal = function (req, res) {
  const request = req.body;
  calories.findOneAndUpdate(
    { date: request.date, uuid: request.uuid },
    {
      $set: { "calories.target": request.goal },
    },
    { upsert: true, new: true },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    }
  );
};

module.exports = { addFood, getFood, addGoal, addExercise };
