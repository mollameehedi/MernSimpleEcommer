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
            let user = new userModel({
                name,email,password:hash
            })
            await user.save();
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
                    expireTime = '1s'
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

module.exports ={ registrationController,loginController};