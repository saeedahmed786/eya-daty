const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "0"
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: Object,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
    },
    city: {
        type: String,
    },
    gender: {
        type: String,
    },
    dob: {
        type: String,
    },
    resetToken: {
        type: String,
    },
    expireToken: {
        type: String,
    }

}, { timestamps: true }
);

const userModel = new mongoose.model('User', userSchema);
module.exports = userModel;
