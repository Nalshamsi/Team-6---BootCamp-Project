const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const passport = require("passport");

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
    providerID: req.body.providerID,
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

// Update an activity - Deema
// router.post("/update", function (req, res) {
//     ActivityModel.findOneAndUpdate(
//       {
//         _id: req.body._id,
//       },
//       {
//         title: req.body.title,
//         description: req.body.description,
//         city: req.body.city,
//         duration: req.body.duration,
//         date: req.body.date,
//         location: req.body.location,
//       },
//       { new: true }
//     )
//       .then(
//         // If success
//         function (dbDocument) {
//           res.json(dbDocument);
//         }
//       )
//       // otherwise
//       .catch(function (error) {
//         console.log("/update error", error);
//         res.send("an error occured");
//       });
//   });

router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    // Client (browser, postman) POSTs this...
    const formData = {};

    if (req.body.title) formData["title"] = req.body.title;
    if (req.body.description) formData["description"] = req.body.description;
    if (req.body.city) formData["city"] = req.body.city;
    if (req.body.duration) formData["duration"] = req.body.duration;
    if (req.body.date) formData["date"] = req.body.date;
    if (req.body.location) formData["location"] = req.body.location;
    if (req.body.photo) formData["photo"] = req.body.photo;

    // Check if city exists
    ActivityModel.findById(req.user.id)
      .then(async function (dbDocument) {
        // If photo file is included...
        if (Object.values(req.files).length > 0) {
          const files = Object.values(req.files);

          // upload to Cloudinary
          await cloudinary.uploader.upload(
            files[0].path,
            (cloudinaryErr, cloudinaryResult) => {
              if (cloudinaryErr) {
                console.log(cloudinaryErr);
                res.json({
                  status: "not ok",
                  message: "Error occured during image upload",
                });
              } else {
                // Include the image url in formData
                formData.photo = cloudinaryResult.url;
                console.log("formData.photo", formData.photo);
              }
            }
          );
        }

        // If city exists...
        if (dbDocument) {
          ActivityModel.findOneAndUpdate(
            {
              _id: req.user.id,
            },
            {
              $set: formData,
            },
            { new: true }
          )
            .then(function (dbDocument) {
              res.json({
                status: "ok",
                message: {
                  city: dbDocument.city,
                  photo: dbDocument.photo,
                  title: dbDocument.title,
                  description: dbDocument.description,
                  date: dbDocument.date,
                  location: dbDocument.location,
                  duration: dbDocument.duration,
                },
              });
            })
            .catch(function (dbError) {
              console.log(dbError, "error occured at /activities/update");
              res.status(403).json({
                status: "not ok",
                message: "Activity already exists",
              });
            });
        }
        // If city does NOT exist....
        else {
          // reject the request
          res.status(403).json({
            status: "not ok",
            message: "Activity already exists",
          });
        }
      })
      .catch(function (dbError) {
        // For the developer
        console.log("An error occured", dbError);

        // For the client (frontend app)
        res.status(503).json({
          status: "not ok",
          message: "Something went wrong with db",
        });
      });
  }
);

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

router.post("/findMy", function (req, res) {
  ActivityModel.find({ providerID: "638b615c2c5292445520aa2b" })
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/find error", error);

      res.send("An error occured.");
    });
});

router.post("/apply", function (req, res) {
  let newDocument = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    age: req.body.age,
  };

  UserModel.create(newDocument)
    .populate("ActivityModel")
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/add error", error);

      res.send("An error occurred");
    });
});

module.exports = router;
