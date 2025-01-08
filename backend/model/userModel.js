const { default: mongoose, mongo, Schema } = require("mongoose");

let userSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is Required'],
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    otp:{
        type:Number,
    },
    number:{
        type:String,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:'user'
    },
    address:{
        type:String,
    },
    images:{
        type:String,
    },
    isVerify:{
        type:Boolean,
        default:false,
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema);