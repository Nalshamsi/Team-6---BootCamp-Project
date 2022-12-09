const express = require('express');
const router = express.Router();

const ProviderModel = require('../models/ProviderModel.js');

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

module.exports = router;