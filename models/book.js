const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  link: { type: String, required: false },
  favorite: { type: Boolean, required: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
