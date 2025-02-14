const jwt = require('jsonwebtoken');

function authMiddleware(req,res,next) {
    let {token} = req.cookies;
    if(token){
        jwt.verify(token, process.env.jwt_secret, function(err, decoded) {
            if(err){
                return res.status(400).send({success:false,message:err.message})
            }else{
                let{role} = decoded.userData
                if(role == 'admin'){
                   next()  
                }else{
                    return res.status(401).send({success:false,message:'access denied'})
                }
            }
          });
    }else{
        return res.status(404).send({success:false,message:'Token not found'})
    }
    
}

module.exports = {authMiddleware}