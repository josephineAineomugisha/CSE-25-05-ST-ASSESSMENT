const express = require('express')
const router = express.Router()
const addproductiii = require('../models/addproduct')


router.get("/",(req,res)=>{
    res.render("validform")
})


router.post('/', async (req, res) => {
    try {
        const newProduct = new addproductiii({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity
        });
        await newProduct.save();
        res.render('validform', { success: 'Product saved successfully!' });
    } catch (err) {
        res.render('validform', { error: 'Did not save product' });
    }
});

module.exports = router