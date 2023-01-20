const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: String,
    },
    status: {
        type: String,
        default: "Pending"
    },
    paidStatus: {
        type: String,
        default: "Free"
    },
    picture: {
        type: Object
    },
    type: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    clinicName: {
        type: String,
    },
    pictures: {
        type: Array,
        required: true
    },
    phone: {
        type: String,
    },
    phoneTwo: {
        type: String,
    }, 
    fax: {
        type: String,
    },
    facebookLink: {
        type: String,
    },
    instagram: {
        type: String,
    },
    twitter: {  
        type: String,
    },
    messenger: {
        type: String,
    },
    bio: {
        type: String,
    },
    specialisation: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: "alru"
    },
    fullAddress: {
        type: String,
        default: "alru"
    },
    state: {
        type: String,
        default: "alru"
    },
    experience: {
        type: String,
    },
    gpsData: {
        type: String,
        required: true
    },
    schedule: {
        type: Array,
        required: true
    },
    services: {
        type: Array,
        required: true
    },
    notes: {
        type: Array,
    },
    gender: {
        type: String,
    },
    owner: {
        type: String,
        // required: true,
        default: "Yes"
    },
    recommendations: {
        type: Array,
        ref: "User",
        default: []
    },
    notrecommendations: {
        type: Array,
        ref: "User",
        default: []
    },
    views: {
        type: Array,
        ref: "User",
        default: []
    },
    favourites: {
        type: Array,
        ref: "User",
        default: []
    },

}, { timestamps: true }
);

const clinicModel = new mongoose.model('clinic', clinicSchema);
module.exports = clinicModel;
