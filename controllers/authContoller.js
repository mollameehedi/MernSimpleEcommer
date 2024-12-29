const EmailValidateCheck = require("../helpers/ValidateEmail");
const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');

async function registrationController(req,res) {
   let {name,email,password} = req.body
//    let check =  EmailValidateCheck(email);
   

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

       ;
    } catch (error) {
      res.status(500).send({error})
    }
}
async function loginController(req,res) {
    let {email,password} = req.body
    let existinguser = await userModel.findOne({email})

    if(existinguser){
        bcrypt.compare(password, existinguser.password, function(err, result) {
            userData= {
                name:existinguser.name,
                email:existinguser.email,
                role:existinguser.role,
            }
            if(result){
                return res.status(200).send({userData:userData,message:'Login Successfully!!'})
            }
           console.log(result);
           
        });
       }else{
        return res.status(400).send({error:'Something went wron!!'})
       }
    
}

module.exports ={ registrationController,loginController};