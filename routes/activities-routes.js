const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const passport = require('passport');


const ActivityModel = require('../models/ActivityModel.js');

router.post('/create',
function(req, res) {

    var newDocument = {
        "title": req.body.title,
        "date": req.body.date,
        "location": req.body.location
    };

    ProductModel
    .create(newDocument)
    .then(
        function(dbDocument) {
            res.json(dbDocument);
        }
    )
    .catch(
        function(dbError) {
            console.log(dbError);
            res.send("Error occured /avtivities/create");
        }
    );
}
);

router.post('/update',
passport.authenticate('jwt', {session: false}),
function(req, res) {

    // Client (browser, postman) POSTs this...
    const formData = {}

    if( req.body.title ) formData['title'] = req.body.title;
    if( req.body.description ) formData['description'] = req.body.description;
    if( req.body.city ) formData['city'] = req.body.city;
    if( req.body.duration ) formData['duration'] = req.body.duration;
    if( req.body.date ) formData['date'] = req.body.date;
    if( req.body.location ) formData['location'] = req.body.location;
    if( req.body.photo ) formData['photo'] = req.body.photo;

    // Check if city exists
    ActivityModel
    .findById(req.user.id)
    .then(
        async function (dbDocument) {

            // If photo file is included...
            if( Object.values(req.files).length > 0 ) {

                const files = Object.values(req.files);
                
                
                // upload to Cloudinary
                await cloudinary.uploader.upload(
                    files[0].path,
                    (cloudinaryErr, cloudinaryResult) => {
                        if(cloudinaryErr) {
                            console.log(cloudinaryErr);
                            res.json(
                                {
                                    status: "not ok",
                                    message: "Error occured during image upload"
                                }
                            )
                        } else {
                            // Include the image url in formData
                            formData.photo = cloudinaryResult.url;
                            console.log('formData.photo', formData.photo)
                        }
                    }
                )
            };

            // If city exists...
            if(dbDocument) {
       
                ActivityModel
                .findOneAndUpdate(
                    {
                        _id: req.user.id
                    },
                    {
                        $set: formData
                    },
                    {new: true}
                )
                .then(
                    function(dbDocument) {
                        res.json(
                            {
                                "status": "ok",
                                "message": {
                                    city: dbDocument.city,
                                    photo: dbDocument.photo,
                                    title: dbDocument.title,
                                    description: dbDocument.description,
                                    date: dbDocument.date,
                                    location: dbDocument.location,
                                    duration: dbDocument.duration
                                    
                                }
                            }
                        );
                    }
                )
                .catch(
                    function(dbError) {
                        console.log(dbError, 'error occured at /activities/update')
                        res.status(403).json(
                            {
                                "status": "not ok",
                                "message": "Activity already exists"
                            }
                        )
                    }
                )

            }
            // If city does NOT exist....
            else { 
                // reject the request
                res.status(403).json(
                    {
                        "status": "not ok",
                        "message": "Activity already exists"
                    }
                )
            }
        }
    )
    .catch(
        function(dbError) {

            // For the developer
            console.log(
                'An error occured', dbError
            );

            // For the client (frontend app)
            res.status(503).json(
                {
                    "status": "not ok",
                    "message": "Something went wrong with db"
                }
            )

        }
    )
}
);

router.post('/find',
passport.authenticate('jwt', {session: false}),
    function(req, res) {
        ActivityModel
        .findById(req.user.id)
        .then(
            function(dbDocument) {
                res.json(
                    {
                        "status": "ok",
                        "message": {
                            city: dbDocument.city,
                                    photo: dbDocument.photo,
                                    title: dbDocument.title,
                                    description: dbDocument.description,
                                    date: dbDocument.date,
                                    location: dbDocument.location,
                                    duration: dbDocument.duration
                        }
                    }
                );
            }
        )
        .catch(
            (err) => {
                console.log(err);
                res.status(503).json(
                    {
                        "status": "not ok",
                        "message": "Please try again later"
                    }
                );
            }
        )
    }
)

module.exports = router;