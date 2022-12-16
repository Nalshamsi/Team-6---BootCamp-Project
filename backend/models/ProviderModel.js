const mongoose = require('mongoose');

//Schema
const ProviderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
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
    }
);

//Model
const ProviderModel = mongoose.model('providers', ProviderSchema);

// Export the model
module.exports = ProviderModel;