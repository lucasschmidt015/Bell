const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bellBeatSchema = new Schema({
    reasonId: {
        type: Schema.Types.ObjectId,
        ref: 'Reason',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Bellbeat', bellBeatSchema);