const express = require('express');
const {createProduct, allProduct, singleProduct, deleteProduct, updateProduct} = require('../../controllers/productController')
const upload = require('../../middleware/fileuploadMiddleware');
const errCheck = require('../../middleware/errorHandleMiddleware');

const router = express.Router();

router.post("/create",upload.array('image'),errCheck,createProduct)
router.delete("/delete/:id",deleteProduct)
router.get("/allproduct",allProduct)
router.get("/single/:id",singleProduct)
router.patch("/create",upload.array('image'),errCheck,updateProduct)



module.exports = router