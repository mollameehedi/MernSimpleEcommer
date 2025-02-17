const cartModel = require("../model/cartModel");

async function addtoCart(req,res){

    let {user,product} = req.body
        
    try {

        let existCart = await cartModel
        .findOne({ user, product })
        .populate("product");
        if(existCart){
            if (existCart.quantity < existCart.product.stock) {
                existCart.quantity++;
                await existCart.save();
        
                res.status(200).send({
                  success: true,
                  msg: "Cart Item Quantity Increment",
                  existCart,
                });
              } else {
                res.status(202).send({
                  success: false,
                  msg: "Stock Limit Reached",
                });
              }
        }else{
            let cart = new cartModel({user,product});
            await cart.save()
            return res.status(201).send({success:true,data:cart,message:'Cart Created Successfully!'})
        }
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
        
}


async function getUserCart(req,res){

    let {user_id} = req.params
    try {
        let cart = await  cartModel.find({user:user_id})
        return res.status(201).send({
            success:true,
            data:cart,
            message:'Cart fetch successfully!'
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    
}

module.exports = {addtoCart,getUserCart}