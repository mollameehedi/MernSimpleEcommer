const express = require('express');
const { addtoCart,getUserCart,incrementCartItem,decrementCartItem,deleteCart } = require('../../controllers/cartController');



const router = express.Router();

router.post("/addtocart",addtoCart)
router.get("/usercart/:user_id",getUserCart)

router.patch("/increment/:id",incrementCartItem)
router.patch("/decrement/:id",decrementCartItem)
router.delete("/delete/:id",deleteCart)



module.exports = router