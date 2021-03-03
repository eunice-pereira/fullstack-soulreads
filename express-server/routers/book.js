const express = require('express');
const router = express.Router();
const {
	showBookList,
	delBook,
	viewBook,
	addBookApi,
	addManualBook,
	editBook,
} = require('../controllers/book');

router
	.get('/booklist', showBookList)
	.post('/new', addManualBook)
	.post('/new-api', addBookApi)
	.post('/:bookId/delete', delBook)
	.put('/:bookId/edit', editBook)
	.get('/:bookId/view', viewBook);

module.exports = router;
