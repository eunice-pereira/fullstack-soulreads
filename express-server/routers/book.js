const express = require('express');
const router = express.Router();
const {
	showBookList,
	bookForm,
	processBookForm,
	delBook,
	showEditList,
	processEditList,
	viewBook,
	addBookApi,
} = require('../controllers/book');

router
	.get('/booklist', showBookList)
	.post('/newbook', processBookForm)
	.post('/bookapi', addBookApi)
	.post('/:bookId/delete', delBook)
	.get('/:bookId/edit', showEditList)
	.post('/:bookId/edit', processEditList)
	.get('/:bookId/viewbook', viewBook);

module.exports = router;
