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
} = require('../controllers/book');

router
	.get('/booklist', showBookList)
	.get('/newbook', bookForm)
	.post('/newbook', processBookForm)
	.post('/:bookId/delete', delBook)
	.get('/:bookId/edit', showEditList)
	.post('/:bookId/edit', processEditList)
	.get('/:bookId/viewbook', viewBook);

module.exports = router;
