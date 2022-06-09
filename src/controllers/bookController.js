const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let data = req.body
    var ObjectId = require('mongoose').Types.ObjectId;
 
    if(data.author_id!== undefined){
       if(data.publisher!== undefined){
           if(ObjectId.isValid(data.author_id)&&ObjectId.isValid(data.publisher)){
            let saveData= await bookModel.create(data)   
            return res.send({data:saveData})
           }
        return res.send({data: "invalid id" })
       }return res.send({data: "publisher id is missing" })

    } return res.send({data: "author id is missing" })
    
   
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
