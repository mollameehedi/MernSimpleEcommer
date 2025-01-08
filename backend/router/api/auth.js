const express = require('express');
const {registrationController,loginController} = require('../../controllers/authContoller');
const { authMiddleware } = require('../../middleware/authMiddleware');
const router = express.Router();



router.post("/registration",registrationController)
router.post("/login",loginController)
router.get("/getuser",authMiddleware,function(req,res){
res.send('done');
})



module.exports = router