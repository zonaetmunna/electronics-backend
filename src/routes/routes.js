const router = require('express').Router();

router.use('/products', require('./productRoute'));
router.use('/auth', require('./authRoutes'));

module.exports = router;