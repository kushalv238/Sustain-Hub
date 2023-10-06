const mongoose = require('mongoose');

const RawProducts = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    ecoFriendly: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('RawProducts', RawProducts);