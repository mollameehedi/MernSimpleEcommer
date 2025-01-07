const express = require('express');
const {registrationController,loginController} = require('../../controllers/authContoller');
const router = express.Router();


router.post("/registration",registrationController)
router.post("/login",loginController)



module.exports = router