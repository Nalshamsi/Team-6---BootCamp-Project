const express = require("express");
const router = express.Router();

const ActivityModel = require("../models/ActivityModel.js");

router.post("/add", function (req, res) {
  let newDocument = {
    title: req.body.title,
    description: req.body.description,
    city: req.body.city,
    duration: req.body.duration,
    date: req.body.date,
    location: req.body.location,
    gender: req.body.gender,
    providerID: req.body.providerID,
  };

  ActivityModel.create(newDocument)
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/add error", error);

      res.send("An error occured");
    });
});

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
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/update error", error);

      res.send("An error occured.");
    });
});

router.post("/find", function (req, res) {
  ActivityModel.find()
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/find error", error);

      res.send("An error occured.");
    });
});

module.exports = router;
