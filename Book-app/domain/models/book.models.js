const mongoose = require('mongoose')
const Schema = mongoose.Schema

// esquema bd

const BookScehma = Schema({

    _id :{
        type: String,
        require: true,
        minLength: 2,
        maxLength: 25
    },
    author: {
        type: String,
        require: true,
        lowercase: true,
        minLength: 2,
        maxLength: 25
    },
    cost: Number,
    state: Boolean,
    stock: Number,
},
{
    timestamps: true
}
);

//Modelo node
const BookModel = mongoose.model('books', BookScehma);

module.exports = BookModel