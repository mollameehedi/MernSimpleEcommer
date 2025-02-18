const { default: mongoose, mongo, Schema } = require("mongoose");

let cartSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    cartItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },
    paymentStatus:{
        type:string,
        enum:["paid","unpaid"],
        default:"unpaid"
    }, 
    totalPrice:{
        type:Number,
    },
    fulladdress:{
        type:string,
        required:true,
    },
    city:{
        type:string,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('Cart',cartSchema);