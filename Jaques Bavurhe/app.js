const express = require("express");
const mongoose = require("mongoose");
const path = require("path");


require('dotenv').config();


// Import Routes
const productRoutes = require("./routes/productRoutes");

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
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//5. Routes
// Using Imported Routes
app.use("/products", productRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
