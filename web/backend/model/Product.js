const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    RawMaterials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rawMaterial'
    }],
    Company: {
        type: String
    },
    Price: {
        type: Number,
        required: true
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
});

module.exports = mongoose.model('Products', productSchema);