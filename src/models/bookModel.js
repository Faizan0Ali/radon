const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "faizanAuthor"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type : ObjectId,
        ref: "faizanPublisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('faizanLibraryBook', bookSchema)
