const RawProduct = require('./../model/RawProducts');
const asyncHandler = require('express-async-handler');


const weights = {
    manufacturingProcess: 0.2,
    transportation: 0.1,
    energyEfficiency: 0.1,
    waterUsage: 0.1,
    carbonEmissions: 0.1,
};

const calculateSustainabilityScore = asyncHandler(async (product) => {
    let score = 0;

    for (const material of product.rawMaterials) {
        const prod = await RawProduct.find({ name: material.name })

        let materialScore = 0;
        if (prod.source === "Local") {
            materialScore += prod.ecoFriendly ? 3 : 1;
        } else {
            materialScore += prod.ecoFriendly ? 2 : 0;
        }
        score += (materialScore * material.percentage) / 100;
    }

    score += weights.manufacturingProcess * (product.manufacturingProcess === "Low-energy consumption" ? 3 : 1);
    score += weights.transportation * (product.transportation === "Shipped locally" ? 2 : 1);
    score += weights.energyEfficiency * (product.energyEfficiency ? 3 : 1);
    score += weights.waterUsage * (product.waterUsage === "Low" ? 2 : 1);
    score += weights.carbonEmissions * (product.carbonEmissions === "Low" ? 2 : 1);

    return score;
})

module.exports = calculateSustainabilityScore;