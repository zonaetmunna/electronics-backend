const { getProducts, getSingleProduct, postProduct, deleteProduct } = require('../controller/productController');
const router = require('express').Router();

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', postProduct);
router.delete('/:id', deleteProduct);

module.exports = router;