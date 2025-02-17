const express = require('express');
const { addtoCart,allCart } = require('../../controllers/cartController');



const router = express.Router();

router.post("/addtocart",addtoCart)
router.get("/allcart",allCart)



module.exports = router