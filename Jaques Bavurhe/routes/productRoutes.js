const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// GET: Show dashboard with products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.render('products', { products });  
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST: Add new product
router.post('/add', async (req, res) => {
  try {
    const { productName, category, price, quantity, color, image } = req.body;

    const newProduct = new Product({
      productName,
      category,
      price,
      quantity,
      color,
      image
    });

    await newProduct.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving product');
  }
});

module.exports = router;
