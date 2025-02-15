
const multer  = require('multer')
const path = require('path');

const uploadsDir = path.join(__dirname, '../uploads'); // Relative path!
const fs = require('fs');
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      let extention = file.originalname.split(".")
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${extention[extention.length - 1]}`)
    }
  })
  
  const upload = multer({ storage: storage,
    limits:{
      fileSize:5 * 1024 * 1024 
    }
   })

 

   module.exports = upload 