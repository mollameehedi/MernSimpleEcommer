const express = require('express');
const router = express.Router();
const auth = require('./auth');
const category = require('./category');
const product = require('./product');
const cart = require('./cart');
const { authMiddleware } = require('../../middleware/authMiddleware');


router.use('/auth',auth)
router.use('/category',authMiddleware,category)
router.use('/product',authMiddleware,product)
router.use('/cart',authMiddleware,cart)


module.exports = router