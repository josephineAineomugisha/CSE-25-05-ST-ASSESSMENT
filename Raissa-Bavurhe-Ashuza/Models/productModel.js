const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        reuired: true
    },
    color: {
        type: String,
        reuired: true
    },
    image: {
        type: String
    }


});

module.exports = mongoose.model('Products', productSchema);