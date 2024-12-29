const { default: mongoose, mongo } = require("mongoose");

let userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
    },
    otp:{
        type:String,
    },
    address:{
        type:String,
    },
    images:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema);