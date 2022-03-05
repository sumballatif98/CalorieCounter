// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = function () {
  mongoose.Promise = global.Promise;
  const url = "mongodb://localhost:27017/calorieCounter";
  mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(
      () => {
        console.log("Database is connected");
      },
      (err) => {
        console.log("Cannot connect to the database " + err);
      }
    );
  mongoose.set("useCreateIndex", true);
};

export { connectDB };
