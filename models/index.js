const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// aggregate the models
module.exports.Book = require("./book");
module.exports.Author = require("./author");
