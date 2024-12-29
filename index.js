require('dotenv').config()
const express = require('express');
const app = express()
const router = require('./router');


app.use(router)


app.listen(process.env.SERVER_PORT || 8000,()=>{
    console.log('Server is running!!')
})