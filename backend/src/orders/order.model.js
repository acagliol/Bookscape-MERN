const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            // required: true,
        },
        state: {
            // required: true,
            type: String,
        },
        zipcode: {
            // required: true,
            type: String,
        },
    },
    phone: {
        type: Number,
        required: true,
    },
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }]
    ,
    totalPrice: {
        required: true,
        type: Number,
    },
},{
    timestamps: true,
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;