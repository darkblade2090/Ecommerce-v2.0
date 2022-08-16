const addProductsController = require('../controllers/addProducts');
const POSTaddProductsController = require('../controllers/POSTaddProducts');

const express = require('express');
const router = express.Router();

router.route('/') 
.get(addProductsController)
.post(POSTaddProductsController);


module.exports = router;