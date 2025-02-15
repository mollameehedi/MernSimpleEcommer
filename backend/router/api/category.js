const express = require('express');
const { createcategory, deleteCategory } = require('../../controllers/categoryController');
const upload = require('../../middleware/fileuploadMiddleware');
const errCheck = require('../../middleware/errorHandleMiddleware');


const router = express.Router();

router.post("/create",upload.single('image'),errCheck,createcategory)
router.delete("/delete/:id",deleteCategory)



module.exports = router