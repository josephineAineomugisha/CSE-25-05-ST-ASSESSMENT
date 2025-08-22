
const express = require('express'); 
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();



//import routes
const productRoutes = require('./routes/productRoutes')

//2. Instantiations
const app = express();
const port = 3003; 



//3. Confugurations
mongoose.connect(process.env.DATABASE);
mongoose.connection
.once('open', ()=>{ 
console.log('Mongoose connection open')
})
.on('error', (error)=>{
console.error(`Connection error: ${error.message}`)
});

app.set('view engine', 'pug'); 
app.set('views', path.join( __dirname, 'views')); 



app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 



//5. Use imported routes (last section of middlewire)
app.use('/', productRoutes)



//non existent routes
app.use((req, res) => {
  res.status(404).send('Oops! Route not found.');
});

//6. Bootstrapping server 

app.listen(port, () => console.log(`listening on port ${port}`));

