function EmailValidateCheck(email){
    let pattern = "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/"; 
    console.log(email,pattern.test(email));
    
    return email.test(pattern);
    
    
}

module.exports = EmailValidateCheck