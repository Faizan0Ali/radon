const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true,
    },
    authorName: String,
    tags: [String],

    isPublished: {
        type: Boolean,

    },
    year: {
        type: Number,
        default: 2021

    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable: Boolean,
    totalPages: String,

    sales: { type: Number, default: 10 }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
