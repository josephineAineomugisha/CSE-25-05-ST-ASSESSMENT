const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    Category: {
        type: String,
    },
    
    Price: {
        type: String,
        trim: true,
    },

    Quantity: {
        type: String,
    
    },
    Color: {
        type: String,
        trim: true
    }
});

module.exports=mongoose.model('newproduct',productSchema);





