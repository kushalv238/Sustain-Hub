const RawProduct = require('./../model/RawProducts');
const percentageToNumber = require('./precToNum')

const weights = {
    manufacturingProcess: 0.2,
    transportation: 0.1,
    energyEfficiency: 0.1,
    waterUsage: 0.1,
    carbonEmissions: 0.1,
};

const calculateSustainabilityScore = async (product) => {
    let score = 0;

    for (const material of product.RawMaterials) {
        const prod = await RawProduct.find({ Name: material.Material })
        
        let materialScore = 0;
        if (prod.Source === "Local") {
            materialScore += prod.EcoFriendly ? 3 : 1;
        } else {
            materialScore += prod.EcoFriendly ? 2 : 0;
        }
        score += (materialScore * percentageToNumber(material.Percentage)) / 100;
    }

    score += weights.manufacturingProcess * (product.ManufacturingProcess === "Low-energy consumption" ? 3 : 1);
    score += weights.transportation * (product.Transportation === "Shipped locally" ? 2 : 1);
    score += weights.energyEfficiency * (product.EnergyEfficiency ? 3 : 1);
    score += weights.waterUsage * (product.WaterUsage === "Low" ? 2 : 1);
    score += weights.carbonEmissions * (product.CarbonEmissions === "Low" ? 2 : 1);


    return score;
}

module.exports = calculateSustainabilityScore;