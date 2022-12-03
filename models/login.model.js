const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
  

});

// Model
const userModel = mongoose.model("activities", userSchema);

// Export the model
module.exports = userModel;
