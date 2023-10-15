const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reasonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    songUrl: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Reason', reasonSchema);