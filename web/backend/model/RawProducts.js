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
    CarbonFootprint: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('RawProducts', RawProducts);