const express = require("express");
const router = express.Router();
const ActivityModel = require("../models/ActivityModel.js");

// Add an activity
router.post("/add", function (req, res) {
  let newDocument = {
    title: req.body.title,
    description: req.body.description,
    city: req.body.city,
    duration: req.body.duration,
    date: req.body.date,
    location: req.body.location,
  };

  ActivityModel.create(newDocument)
    .then(
      // If success
      function (dbDocument) {
        res.json(dbDocument);
      }
    )
    // otherwise
    .catch(function (error) {
      console.log("/add error", error);
      res.send("an error occured");
    });
});

// Update an activity
router.post("/update", function (req, res) {
  ActivityModel.findOneAndUpdate(
    {
      _id: req.body._id,
    },
    {
      title: req.body.title,
      description: req.body.description,
      city: req.body.city,
      duration: req.body.duration,
      date: req.body.date,
      location: req.body.location,
    },
    { new: true }
  )
    .then(
      // If success
      function (dbDocument) {
        res.json(dbDocument);
      }
    )
    // otherwise
    .catch(function (error) {
      console.log("/update error", error);
      res.send("an error occured");
    });
});

// Display all activities
router.post("/find", function (req, res) {
  ActivityModel.find()
    .then(
      // If success
      function (dbDocument) {
        res.json(dbDocument);
      }
    )
    // otherwise
    .catch(function (error) {
      console.log("/find error", error);
      res.send("an error occured");
    });
});

module.exports = router;
