const express = require('express');
const router = express.Router();

const productController = require('../controllers/rawDataController.js');

router.route('/')
    // .get(productController.getRawData)
    .post(productController.addRawProd)

    
module.exports = router