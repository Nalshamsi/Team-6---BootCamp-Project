const express = require('express');
const router = express.Router();

const ActivityModel = require('../models/ActivityModel.js');
 const UserModel = require('../models/usersModel');
router.post('/add',
function(req, res) {

    let newDocument = {
        title: req.body.title,
        description: req.body.description,
        city: req.body.city,
        duration: req.body.duration,
        date: req.body.date,
        location: req.body.location,
    };

    ActivityModel
    .create(newDocument)
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {
            console.log('/add error', error);

            res.send('An error occured');
        }
    );
}
);
router.post('/apply',
function(req, res) {

    let newDocument = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        age: req.body.age,
      
    };

    UserModel
    .create(newDocument).populate("ActivityModel")
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {
            console.log('/add error', error);

            res.send('An error occurred');
        }
    );
}
);

router.post('/update',
function(req, res) {
    ActivityModel
    .findOneAndUpdate(
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
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {

            console.log('/update error', error);
            
            res.send('An error occured.');
        }
    )
}
);

router.post('/find',
function(req, res) {
    ActivityModel
    .find()
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {

            console.log('/find error', error);
            
            res.send('An error occured.');
        }
    )
}
);

module.exports = router;