const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    link: {
        type: String,
        required: true
    },
    readStatus: {
        type: String,
        default: "false"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, { timestamps: true }
);

const notificationModel = new mongoose.model('Notification', notificationSchema);
module.exports = notificationModel;
