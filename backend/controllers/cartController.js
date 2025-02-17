const cartModel = require("../model/cartModel");

async function addtoCart(req,res){

    let {user,quantity,product} = req.body
        let cart = new cartModel({user,quantity,product});
    
        await cart.save()
        return res.status(201).send({success:true,data:cart,message:'Cart Created Successfully!'})
}


async function allCart(req,res){

    
    try {
        let cart = await  cartModel.find()
        return res.status(201).send({
            success:true,
            data:cart,
            message:'Cart fetch successfully!'
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    
}

module.exports = {addtoCart,allCart}