const { getProducts, getSingleProduct } = require('../controller/productController');
const router = require('express').Router();

router.get('/', getProducts);
router.get('/:id',getSingleProduct);

module.exports = router;