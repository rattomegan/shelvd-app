const Book = require('../models/book');


module.exports = {
  index,
}

// Callback function
function index(req, res) {
  res.render("books/index");
}