const { getProducts } = require('../controller/productController');
const router = require('express').Router();

router.get('/', getProducts);

module.exports = router;