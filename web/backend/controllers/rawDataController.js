const prodData = require('../model/RawProducts');
const asyncHandler = require('express-async-handler');
const rawProd = require('./../model/RawProducts')

const calculateSustainabilityScore = require('./../utils/calculateSustainabilityScore');

// @desc Post score of the product
// @route POST /prodScore
// @access Private

const addRawProd = asyncHandler(async (req, res) => {
    const { Id, Name, Source, EcoFriendly } = req.body;

    const getDuplicateProduct = await rawProd.find({ Name }).lean().exec();
    if (getDuplicateProduct?.length) {
        return res.status(409).json({ message: `Duplicate product name for ${Name}` });
    }

    const newProduct = { Id, Name, Source, EcoFriendly };
    const addedProduct = await rawProd.create(newProduct)

    if (addedProduct) {
        res.status(200).json({ message: `${Name} created` })
    } else {
        res.status(400).json({ message: "Invalid product data recoreded." })
    }
})

module.exports = { addRawProd }
