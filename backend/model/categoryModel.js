const { default: mongoose, mongo, Schema } = require("mongoose");

let categorySchema = new Schema({
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
        type:String,
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('Category',userSchema);