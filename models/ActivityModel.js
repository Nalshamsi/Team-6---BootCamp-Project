const mongoose = require('mongoose');

//Schema
const ActivitySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          duration: {
            type: String,
            required: true,
          },
          date: {
            type: Date,
            required: false,
          },
          location: {
            type: String,
            required: true,
          },
          photo: {
            type: String, // Google it
            required: false,
          },
          dateCreated: {
            type: Date,
            required: false,
            default: Date.now,
          },
    }
);

//Model
const ActivityModel = mongoose.model('activities', ActivitySchema);

// Export the model
module.exports = ActivityModel;