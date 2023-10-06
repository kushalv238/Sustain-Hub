const prodData = require('../model/prodData');
const asyncHandler = require('express-async-handler');

const calculateSustainabilityScore = require('./../utils/calculateSustainabilityScore');
const carbonFootprintsCalc = require('./../utils/carbonFootprintsCalc');

// @desc Get score of the product
// @route GET /prodScore
// @access Private
const getProdScore = asyncHandler(async (req, res) => {
    const { Name } = req.body;
    if (!Name) {
        return res.status(400).json({ message: 'Product Name required' })
    }

    const prod = await prodData.find({ Name });
    if (!prod || prod.length === 0) {
        return res.status(400).json({ message: 'No such product exists' });
    }
    
    const sustainabilityScore = await calculateSustainabilityScore(prod[0])
    const carbonFootprintsScore = await carbonFootprintsCalc(prod[0])
    
    res.json({ sustainabilityScore, carbonFootprintsScore });
});

const createAProduct = asyncHandler(async (req, res) => {
    const { Name, Description, RawMaterials, Company, Price, Type, ManufacturingProcess, Transportation, EnergyEfficiency, CarbonEmissions } = req.body;
    const getDuplicateProduct = await prodData.find({ Name }).lean().exec();
    if (getDuplicateProduct?.length) {
        return res.status(409).json({ message: `Duplicate product name for ${Name}` });
    }

    const newProduct = { Name, Description, RawMaterials, Company, Price, Type, ManufacturingProcess, Transportation, EnergyEfficiency, CarbonEmissions };
    const addedProduct = await prodData.create(newProduct)

    if (addedProduct) {
        res.status(200).json({ message: `${Name} created` })
    } else {
        res.status(400).json({ message: "Invalid product data recoreded." })
    }
})

module.exports = { getProdScore, createAProduct }