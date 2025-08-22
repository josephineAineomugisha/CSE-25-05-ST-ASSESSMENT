// Dependecies
const express = require('express'); //dependcies
const path= require('path');
const app = express(); //instantications
const port= 3000; //instantications
const mongoose=require('mongoose');
require('dotenv').config();


//importing routes
const product=require("./routes/product");
const newproduct=require('./routes/newproducts');

                                                
//configurations;
mongoose.connect(process.env.DATABASE);
mongoose.connection
.once('open',()=>{
  console.log('Mongoose connection open');
})
.on('error',(err)=>{
console.log(`connection error:${err.message}`);
});


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


///bodypaser
app.use(express.urlencoded({extended:false}));

//serving static files
app.use(express.static(path.join(__dirname,'public')));

// use imported routes
app.use('/',product);
app.use('/',newproduct);



// non existent route
app.use((req, res) => {
  res.status(404).send('This route does not exist');
});


//this is always the last line in this file bootstreaping the server
app.listen(port, () => console.log(`listening on port ${port}`));

