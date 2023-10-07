const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    RawMaterials: [{
        Material: {
            type: String,
            required: true
        },
        Percentage: {
            type: String,
            required: true
        }
    }],
    Company: {
        type: String
    },
    Price: {
        type: Number,
        required: true
    },
    RedeemPrice: {
        type: Number,
        required: false,
    },
    Type: {
        type: String
    },
    ManufacturingProcess: {
        type: String
    },
    Transportation: {
        type: String
    },
    EnergyEfficiency: {
        type: Boolean
    },
    WaterUsage: {
        type: String
    },
    CarbonEmissions: {
        type: String
    },
    imgLink: {
        type: String
    },
});

module.exports = mongoose.model('prodData', productSchema);