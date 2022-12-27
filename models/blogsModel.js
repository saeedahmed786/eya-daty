const mongoonse = require('mongoose');

const blogSchema = new mongoonse.Schema({
    user: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: Object,
        default: {}
    }

}, { timestamps: true }

);

const blogModel = new mongoonse.model('Blog', blogSchema);
module.exports = blogModel;