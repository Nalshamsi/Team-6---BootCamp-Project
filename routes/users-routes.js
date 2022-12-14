const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel.js');

router.post('/reg',
function(req, res) {

    let newDocument = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        confirmpass: req.body.confirmpass,
    };

    UserModel
    .create(newDocument)
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {
            console.log('/userreg error', error);

            res.send('An error occured');
        }
    );
}
);

router.post('/find',
function(req, res) {
    UserModel
    .find()
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {

            console.log('/finduser error', error);
            
            res.send('An error occured.');
        }
    )
}
);


router.put('update', 

router.put('/updateusers', 

    function(req, res) {
    UserModel
    .findOneAndUpdate(
        {
            _id: req.body._id,
        },
          {

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
       

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

            console.log('/updateusers error', error);
            
            res.send('An error occured.');
        }
    )
  }
  );


module.exports = router;