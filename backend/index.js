const express = require('express');
require('dotenv').config()
const app = express()
const router = require('./router');
const DBConnect = require('./config/dbConfig');
const cookieParser = require('cookie-parser')


DBConnect();
app.use(express.static("uploads"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use(router)

let port = process.env.SERVER_PORT? process.env.SERVER_PORT : 8000

app.listen(port,()=>{
    console.log(`Server is running and port is ${port}`)
})

