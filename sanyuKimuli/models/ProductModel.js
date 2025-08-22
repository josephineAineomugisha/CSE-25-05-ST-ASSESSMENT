const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true },
    category: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    color: {type: String},
    image: {type: String}
});

module.exports = mongoose.model('Product', productSchema);

