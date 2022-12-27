const mongoonse = require('mongoose');

const commentSchema = new mongoonse.Schema({
    commentor: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pageId: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    responseTo: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: "comment"
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
    dislikes: {
        type: Array,
        default: []
    },
    timeOfSubmit: {
        type: String,
    }

}, { timestamps: true }

);

const commentModel = new mongoonse.model('comment', commentSchema);

module.exports = commentModel;