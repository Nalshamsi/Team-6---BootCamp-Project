const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const ProviderModel = require('../models/ProviderModel');

router.post('/reg',
function(req, res) {

    let newDocument = {
        name:req.body.name,
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
router.post('/login',
function(req, res) {

    let newDocument = {
      
        email: req.body.email,
        password: req.body.password,
    };

    ProviderModel
    .findOne({ email: newDocument.email} )
    .then(
        function(dbDocument) {
            res.json(dbDocument)
            
            if(dbDocument) {
                   
                bcryptjs.compare(
                    newDocument.password,          
                    dbDocument.password        
                )
                .then(
                    (isMatch) => {
                     
                        if(isMatch) {
                         
                            const payload = {
                                _id: dbDocument._id,
                                email: dbDocument.email
                            }
                           
                            jwt
                            .sign(
                                payload,
                                jwtSecret,
                                (err, jsonwebtoken) => {
                                    if(err) {
                                        console.log(err);
                                        res.status(501).json(
                                            {
                                                "message": "Something went wrong"
                                            }
                                        );
                                    }
                                    else {
                                   
                                        res.json(
                                            {
                                                "status": "ok",
                                                "message": {
                                                    brandName:req.body.brandName,
                                                    jsonwebtoken: jsonwebtoken
                                                }
                                            }
                                        );
                                    }
                                }
                            )
                        }
                     
                        else {
                            res.status(401).json(
                                {
                                    "message": "Wrong email or password"
                                }
                            );
                        }
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                    }
                )
            }
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
router.post('/signing', 
    (req, res) => {

    
        const formData = {
            email: req.body.email,
            password: req.body.password,
        }

    
        ProviderModel.findOne({ email: formData.email })
        .then(
            (dbDocument) => {
               
                if(dbDocument) {
                   
                    bcryptjs.compare(
                        formData.password,          
                        dbDocument.password        
                    )
                    .then(
                        (isMatch) => {
                         
                            if(isMatch) {
                             
                                const payload = {
                                    _id: dbDocument._id,
                                    email: dbDocument.email
                                }
                               
                                jwt
                                .sign(
                                    payload,
                                    jwtSecret,
                                    (err, jsonwebtoken) => {
                                        if(err) {
                                            console.log(err);
                                            res.status(501).json(
                                                {
                                                    "message": "Something went wrong"
                                                }
                                            );
                                        }
                                        else {
                                       
                                            res.json(
                                                {
                                                    "status": "ok",
                                                    "message": {
                                                        brandName:req.body.brandName,
                                                         
                                                        jsonwebtoken: jsonwebtoken
                                                    }
                                                }
                                            );
                                        }
                                    }
                                )
                            }
                         
                            else {
                                res.status(401).json(
                                    {
                                        "message": "Wrong email or password"
                                    }
                                );
                            }
                        }
                    )
                    .catch(
                        (err) => {
                            console.log(err)
                        }
                    )
                }
             
                else {
                  
                    res.status(401).json(
                        {
                            "message": "Wrong email or password"
                        }
                    );
                }
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

router.put(
    '/update',
    function(req, res) {

        let updates = {}

        if (req.body.name){ 
            updates['name'] = req.body.name 
        };
        if (req.body.email) {
            updates['email'] = req.body.email;
        };
        if (req.body.phone) {
            updates['phone'] = req.body.phone;
        };

        ProviderModel
        .findOneAndUpdate(
            {
                "email": req.body.email
            },
            {
                $set: updates
            },
            {
                new: true
            }
        )
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/users/update error', error);
                res.send('An error occured');
            }
        )

    }
);

module.exports = router;
