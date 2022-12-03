const mongoose = require('mongoose');

//Schema
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: false,
        },
        avatar: {
            type: String,
            required: false,
        },
        dateCreated: {
            type: String,
            required: true,
            default: Date.now
        },
        subscription: {
            type: Boolean,
            required: false,
        } 
    }
);

//Model
const UserModel = mongoose.model('users', UserSchema);

// Export the model
module.exports = UserModel;