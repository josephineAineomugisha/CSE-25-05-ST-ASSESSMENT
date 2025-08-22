const express = require('express');
const router = express.Router();
const newstock=require('../models/productmodel')
router.post('/product', async (req, res) => {
    try {
        console.log(req.body);
        const newProduct = new newstock(req.body);
        let existingProduct = await newstock.findOne({ name: req.body.name });
        if (existingProduct) {
            return res.status(400).send('This product already exists');
        } else {
            await newProduct.save();
        }
    } catch (error) {
        console.error(error);
        res.status(400).render('product', { error: error.message });
    }
});
  

module.exports = router;


