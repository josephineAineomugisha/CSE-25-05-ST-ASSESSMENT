//1. Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();


// Import Routes
const productRoutes = require('./Routes/productRoutes');



//2. Instatiations
const app = express();
const port = 3000;








//3. Configurations
mongoose.connect(process.env.DATABASE);
mongoose.connection
    .once('open', () => {
        console.log('Mongoose connection open')
    })
    .on('error', (error) => {
        console.error(`Connection error: ${error.message}`)
    })
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));





//4. Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




//5. Routes
// Using Imported Routes
app.use('/', productRoutes);


















//For non-existing routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// 6.Bootstrapping Server

app.listen(port, () => console.log(`listening on port ${port}`));