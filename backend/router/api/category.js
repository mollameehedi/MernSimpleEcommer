const express = require('express');
const { createcategory } = require('../../controllers/categoryController');
const multer  = require('multer')
const path = require('path');

const router = express.Router();

const uploadsDir = path.join(__dirname, '../../uploads'); // Relative path!
const fs = require('fs');
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      let extention = file.originalname.split(".")
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${extention[1]}`)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/create",upload.single('image'),createcategory)



module.exports = router