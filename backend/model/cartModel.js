const { default: mongoose, mongo, Schema } = require("mongoose");

let cartSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        trim:true,
    }
    
},{
    timestamps:true
})

module.exports = mongoose.model('Cart',cartSchema);