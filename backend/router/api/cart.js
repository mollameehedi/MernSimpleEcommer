const express = require('express');
const { addtoCart,getUserCart } = require('../../controllers/cartController');



const router = express.Router();

router.post("/addtocart",addtoCart)
router.get("/usercart/:user_id",getUserCart)



module.exports = router