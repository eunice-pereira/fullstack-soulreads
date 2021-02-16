const express = require('express');
const router = express.Router();

const {
	addComment,
	delComment,
	processEditComment,
	editComment,
} = require('../controllers/comment');

router

	.post('/add', addComment)
	.post('/:commentId/delete', delComment)
	.get('/:commentId/edit', editComment)
	.put('/:commentId/processedit', processEditComment);

module.exports = router;
