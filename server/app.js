// const http = require('http');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const routes = require("./api/routes/calorieCounterRoutes");
// app.use(bodyParser.urlencoded({ extended: true }));

//db connection
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/calorieCounter";
mongoose.connect(url).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Cannot connect to the database " + err);
  }
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(cors());

app.use("/caloriecounter", routes);
app.use("/", (req, res) => {
  res.send("Server Running");
});

const port = process.env.PORT || 3500;

app.listen(port, function () {
  console.log("Listening on port " + port);
});
