const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');


router.get('/product', (req, res) => {
  res.render('product'); 
});


router.post('/product', async (req, res) => {
  try {
    const { productName, category, price, quantity, color } = req.body;
    const newProduct = new Product({ productName, category, price, quantity, color });

    await newProduct.save();
    res.redirect('/product');  
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to add product');
  }
});




module.exports = router;
