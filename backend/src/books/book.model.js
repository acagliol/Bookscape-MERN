const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    oldPrice: {
        required: true,
        type: Number,
    },
    newPrice: {
        required: true,
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

},{
    timestamps: true,
});

// const Book = mongoose.model('Book', bookSchema); 

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;