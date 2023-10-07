const express = require('express');
const router = express.Router();

const productController = require('../controllers/prodScoreController');

router.route('/')
    .get(productController.getProdScore)
    .post(productController.createAProduct)

    
module.exports = router