const express = require('express');
const {registrationController,loginController, otpverifyController,resendOtpController} = require('../../controllers/authContoller');
const { authMiddleware } = require('../../middleware/authMiddleware');
const router = express.Router();



router.post("/registration",registrationController)
router.post("/login",loginController)
router.post("/otp-verify",otpverifyController)
router.post("/resend-otp",resendOtpController)
router.get("/getuser",authMiddleware,function(req,res){
res.send('done');
})



module.exports = router