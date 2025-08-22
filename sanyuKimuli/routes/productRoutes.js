const express = require('express');
const router = express.Router();

const Product = require('../models/ProductModel');

// GET PRODUCT DASHBOARD
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.render('index', { products });
    } catch (err) {
        res.redirect('/');
    }
});

router.post("/add", async (req, res) => {
  try {
    const { name, category, price, quantity, color } = req.body;

    const products = await Product.find()

    if (!name || !category || !price || !quantity || !color) {
      return res.render('index', {
        products,
        error: "All fields required"
      });
    }

    const product = new Product({
      name,
      category,
      price,
      quantity,
      color
    });

    await product.save();
    res.redirect("/"); 

  } catch (err) {
    console.error(err);
    const products = await Product.find();
    res.render("index", { 
      products, 
      error: "Unable to save product."
  })
}
});


module.exports = router;
