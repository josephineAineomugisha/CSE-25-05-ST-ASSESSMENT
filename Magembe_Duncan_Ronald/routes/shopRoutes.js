const express = require('express')
const router = express.Router()
const Product = require('../model/Product')


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const item = new Product(req.body)
    await item.save()
    res.send('Product saved successfully')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error saving product')
  }
})

module.exports = router