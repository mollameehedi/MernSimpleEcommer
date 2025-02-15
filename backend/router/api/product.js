const express = require('express');
const {createProduct} = require('../../controllers/productController')
const upload = require('../../middleware/fileuploadMiddleware');
const errCheck = require('../../middleware/errorHandleMiddleware');

const router = express.Router();

router.post("/create",upload.array('image'),errCheck,createProduct)



module.exports = router