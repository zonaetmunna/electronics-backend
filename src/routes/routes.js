const router = require('express').Router();

router.use('/products', require('./productRoute'));

module.exports = router;