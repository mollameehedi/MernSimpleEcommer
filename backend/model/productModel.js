const { default: mongoose, mongo, Schema } = require("mongoose");

let productSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is Required'],
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    stock:{
        type:Number
    },
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    },
    rating:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rating"
    },
    sellingPrice:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number,
        required:true
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('Product',productSchema);