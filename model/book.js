const mongoose = require('mongoose');

var BookSchema = mongoose.Schema({

    bookName:{
        type: String,
        required: true
    },

    author:{
        type: String,
        required: true
    },

    price:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Book', BookSchema);