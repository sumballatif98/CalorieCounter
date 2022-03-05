let calories = require("../models/calorieCounterModel");

const addFood = function (req, res) {
  calories.findOneAndUpdate(
    { date: req.body.date },
    {
      // calories: req.body.calories,
      $push: { food: req.body.food },
      $inc: { "calories.consumed": req.body.food.calories },
    },
    { upsert: true, new: true },
    function (err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    }
  );
};

module.exports = { addFood };
