const express = require('express')
const app = express()
const route = require('./routes/News')

const path = require('path')
require('dotenv').config()

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',route);

app.listen(process.env.port,()=>{
    console.log('server is connected')
})