
function registrationController(req,res) {
   let {name} = req.body
    
    res.send(req.body)
}
function loginController(req,res) {
    res.send('Login Successfully')
}

module.exports ={ registrationController,loginController};