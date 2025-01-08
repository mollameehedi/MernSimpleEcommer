const express = require('express');
require('dotenv').config()
const app = express()
const router = require('./router');
const DBConnect = require('./config/dbConfig');

DBConnect();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)


app.listen(process.env.SERVER_PORT || 8000,()=>{
    console.log('Server is running!!')
})

