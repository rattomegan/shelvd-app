const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');


// All paths are prefixed with "/books"

// GET "/books" - Index Route
router.get('/', booksCtrl.index);



module.exports = router;