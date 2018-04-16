// create schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	id: Number,
	title: String,
	author: String,
	image: String,
	releaseDate: String
 });

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
