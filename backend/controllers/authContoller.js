const sendEmail = require("../helpers/SendEmail");
const EmailValidateCheck = require("../helpers/ValidateEmail");
const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

async function registrationController(req,res) {

   let {name,email,password} = req.body
   
   let existinguser = await userModel.findOne({email});

   if(existinguser){
    return res.status(400).send({error:'Email already already exist'})
   }

    try {
        bcrypt.hash(password, 10, async function(err, hash) {
            let otp = Math.floor((Math.random() * 10000) + 10000)

            let user = new userModel({
                name,email,password:hash,
                otp:otp
            })
            await user.save();
            sendEmail(email)
            // setTimeout( async ()=>{
            //     user.otp = null
            //     await user.save()
            // },5000)
            res.send(user)
        });
    } catch (error) {
      res.status(500).send({error})
    }
}
async function loginController(req,res) {
    let {email,password} = req.body
    let existinguser = await userModel.findOne({email}).lean();
    
    if(existinguser){
        bcrypt.compare(password, existinguser.password, async function(err, result) {
            
            if(result){
                const { password, ...userData } = existinguser;  
                let   expireTime = '1d';
                if(existinguser.role == 'admin'){
                    expireTime = '1d'
                }
                let token = jwt.sign({ userData }, process.env.jwt_secret,{ expiresIn: expireTime });
                res.cookie('token',token,{
                    httpOnly:true,
                    secure:false
                });
                return res.status(200).send({data:userData,message:'Login Successfully!!',token})
            }
           console.log(result);
           
        });
       }else{
        return res.status(400).send({error:'Something went wrong !!'})
       }
    
}
async function otpverifyController(req,res){
 let {email,otp } = req.body

 const existinguser = await userModel.findOne({email});

 if(existinguser){
    console.log(existinguser,otp);
    
   if(existinguser.otp == otp){
        existinguser.otp = null;
        existinguser.isVerify = true;
        await  existinguser.save()
        return res.status(200).send({success:true,message:"Otp Verify successfully"})
   }
   else{
    return res.status(404).send({success:false,message:"Invalid otp"})
 }
 }
 else{
    return res.status(404).send({success:false,message:"invalid email"})
 }

    return res.send(existinguser);
}
async function resendOtpController(req,res){
 let {email} = req.body
 const existinguser = await userModel.findOne({email});
 if(existinguser){
    console.log(existinguser);
    let otp = Math.floor((Math.random() * 10000) + 10000)
    existinguser.otp = otp
   await existinguser.save()
   sendEmail(email)
 }
 else{
    return res.status(404).send({success:false,message:"invalid email"})
 }

    return res.send(email);
}

module.exports ={ registrationController,loginController,otpverifyController,resendOtpController};