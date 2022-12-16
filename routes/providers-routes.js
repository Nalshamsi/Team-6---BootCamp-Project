const express = require('express');
const router = express.Router();

const ProviderModel = require('../backend/models/ProviderModel.js');

router.post('/reg',
function(req, res) {

    let newDocument = {
        brandName:req.body.brandName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
    };

    ProviderModel
    .create(newDocument)
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {
            console.log('/providerreg error', error);

            res.send('An error occured');
        }
    );
}
);

router.post('/find',
function(req, res) {
    ProviderModel
    .find()
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {

            console.log('/findprovider error', error);
            
            res.send('An error occured.');
        }
    )
}
);

<<<<<<< HEAD
=======
router.put('/updateproviders', 
  function(req, res) {
  ProviderModel
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

          console.log('/updateproviders error', error);
          
          res.send('An error occured.');
      }
  )
}
);

>>>>>>> main
module.exports = router;