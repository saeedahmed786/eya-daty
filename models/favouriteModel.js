const mongoonse = require('mongoose');

const favouriteSchema = new mongoonse.Schema({
    user: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    page: {
        type: mongoonse.Schema.Types.ObjectId,
        ref: 'clinic',
        required: true
    }

}, { timestamps: true }

);

const favouriteModel = new mongoonse.model('Favourite', favouriteSchema);
module.exports = favouriteModel;