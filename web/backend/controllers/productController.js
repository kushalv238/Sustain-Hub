const Product = require('../model/prodData');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// @desc Get all the products
// @route GET /products
// @access Private
const getAllProducts = asyncHandler(async (req, res) => {
    const Products = await Product.find()

    if(!Products?.length) {
        return res.status(400).json({ message: 'No Products found'} )
    }

    res.json(Products);
});


// @desc Post a new product
// @route POST /products
// @access Private
const createAProduct = asyncHandler(async (req, res) => {
    const { Name, Description, RawMaterials, Company, Price, Type, ManufacturingProcess, Transportation, EnergyEfficiency, CarbonEmissions } = req.body;

    const getDuplicateProduct = await Product.find({ Name }).lean().exec();
    if(getDuplicateProduct?.length) {
        return res.status(409).json({ message: `Duplicate product name for ${Name}` });
    }

    const newProduct = { Name, Description, RawMaterials, Company, Price, Type, ManufacturingProcess, Transportation, EnergyEfficiency, CarbonEmissions };
    const addedProduct = await Product.create(newProduct)

    if(addedProduct) {
        res.status(200).json({ message: `${Name} created` })
    } else {
        res.status(400).json({ message: "Invalid product data recoreded." })
    }
})




// @desc Update a product
// @route PATCH /products
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
    const { id, visits } = req.body

    if(!id) {
        return res.status(400).json({ message: 'ID required' })
    }
    
    const productToUpdate = await Product.findById(id).exec();
    
    if(!productToUpdate) {
        return res.status(400).json({ message: 'Product not found' });
    }

    productToUpdate.visits = visits;

    const updatedProduct = await productToUpdate.save();

    res.json({ message: `${updatedProduct.title} updated` });
});


module.exports = { getAllProducts, createAProduct, updateProduct };

