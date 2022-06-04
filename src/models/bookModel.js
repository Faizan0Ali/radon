const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{type: String,
              unique: true,
              required: true
    },
    AuthorName:{type: String,
           required: true
},  
    category:[String],     
    year: String,
    

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array