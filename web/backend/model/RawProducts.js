const mongoose = require('mongoose');

const RawProducts = new mongoose.Schema({
    Id: {
        type: Number,
        required: false
    },
    Name: {
        type: String,
        required: true
    },
    Source: {
        type: String,
        required: true
    },
    EcoFriendly: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('RawProducts', RawProducts);