const express= require('express');

const {createProduct,getAllProducts,upDateById, deleteProduct} = require('../controller/productController')

const router = express.Router();

router.route('/products/new').post(createProduct);
router.route('/product').get(getAllProducts);
router.route('/product/:id').put(upDateById).delete(deleteProduct)

module.exports= router;
