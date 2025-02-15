const express = require('express');
const { createcategory, deleteCategory, allCategory,updateCategory, singleCategory } = require('../../controllers/categoryController');
const upload = require('../../middleware/fileuploadMiddleware');
const errCheck = require('../../middleware/errorHandleMiddleware');


const router = express.Router();

router.post("/create",upload.single('image'),errCheck,createcategory)
router.delete("/delete/:id",deleteCategory)
router.get("/allcategory",allCategory)
router.patch("/update/:id",upload.single('image'),errCheck,updateCategory)
router.get("/single/:id",singleCategory)



module.exports = router