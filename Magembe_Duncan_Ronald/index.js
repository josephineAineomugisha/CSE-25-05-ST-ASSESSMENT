const express =require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()

const shopRoutes = require('./routes/shopRoutes')

const app = express();
const port= 3000;



mongoose.connect(process.env.DATABASE)
mongoose.connection
.once('on',()=>{
    console.log('mongoose connection open')
})
.on('error',(error)=>{
    console.error(error.message)
})
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

app.use('/',shopRoutes)


app.use((req,res)=>{
    res.status(404).send('non existing route')
});
app.listen(port,()=>{
    console.log('Server Running on port'+port)
})
