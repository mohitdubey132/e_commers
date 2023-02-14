const mongoose = require('mongoose');
const { stringify } = require('querystring');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name should be given']
    },
    description: {
        type: String,
        required: [true, 'give the description']
    },
    price: {
        type: Number,
        required: [true, 'enter the price'],
        maxLength: [8, 'enter the price of products']
    },
    image: [
        {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
    rating: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: [true, 'enter the stock'],
        maxLength: [1000, 'stock can not go high then 1000'],
        default: 1
    },
    reviews: {
        name: {
            type: String,
            required: [true, 'enter name'],
            default: 'ram'
        },
        rating: {
            type: Number,
            required: true,
            default: 1
        },
        comment: {
            type: String,
            default: 'non'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('product', productSchema)