const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const activitiesRoute = require("./routes/activities-route.js");
const loginRoute= require("./routes/login-route");
// Configure middleware for express
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const dbURL =
  "mongodb+srv://admin01:psx12345@cluster0.iadzvvg.mongodb.net/?retryWrites=true&w=majority";

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbURL, dbConfig)
  .then(function () {
    console.log("DB is connected.");
  })
  .catch(function (dbError) {
    console.log("DB connection error", dbError);
  });

server.get("/", function (req, res) {
  res.send("Hello!");
});

server.use("/activities", activitiesRoute);

// login
server.use("/login",loginRoute );


server.listen(3001, function () {
  console.log("Running on http://localhost:3001/");
});


