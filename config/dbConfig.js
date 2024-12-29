const { default: mongoose } = require("mongoose");
 
async function DBConnect(){
  await  mongoose.connect(process.env.DB_URL).then(() =>{
        console.log('DB Connecte ....!');
    }).catch((err)=>{
        console.log('DB Connected Faill!!'.err); 
    })

}

module.exports = DBConnect