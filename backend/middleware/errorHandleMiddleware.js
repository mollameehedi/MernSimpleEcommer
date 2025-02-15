function errCheck(err,req,res,next) {
    if(err){
      return res.status(500).send({success:false,message:err.message})
    }
    next()
   }

   module.exports = errCheck