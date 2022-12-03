const express = require("express");
const router = express.Router();
const userModel = require("../models/login.model");


router.post("/add", function (req, res) {
  let newDocument = {
    email: req.body.title,
    password: req.body.password,
  
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
        email: req.body.email,
        password: req.body.password,
      
      },
      { new: true }
    )
      .then(
      
        function (dbDocument) {
          res.json(dbDocument);
        }
      )
    
  });
  


module.exports = router;