const RawProduct = require('./../model/RawProducts');

const carbonFootprintsCalc = async (product) => {
    let score = 0;
    let count = 0;
    for (const material of product.RawMaterials) {
        const prod = (await RawProduct.find({ Name: material.Material }))[0]
        score += (prod.CarbonFootprint);
        count ++;
    }

    return (score/count)*20;
}

module.exports = carbonFootprintsCalc;