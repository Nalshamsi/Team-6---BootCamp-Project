const express = require("express");
const router = express.Router();
const ActivityModel = require("../models/login.model");

// Add an activity
router.post("/add", function (req, res) {
  let newDocument = {
    email: req.body.title,
    password: req.body.description,
  
  };

  userModel.create(newDocument)
    .then(
    
      function (dbDocument) {
        res.json(dbDocument);
      }
    )
 
   
});

router.put("/updateProfile", function (req, res) {
    userModel.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      {
        email: req.body.title,
        password: req.body.description,
      
      },
      { new: true }
    )
      .then(
        // If success
        function (dbDocument) {
          res.json(dbDocument);
        }
      )
    
  });
  


module.exports = router;