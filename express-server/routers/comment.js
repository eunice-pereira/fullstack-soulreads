const express = require('express');
const router = express.Router();

const {
	addComment,
	delComment,
	processEditComment,
	editComment,
	getComments,
} = require('../controllers/comment');

router

	.post('/add', addComment)
	.get('/:forumId', getComments)
	.post('/:commentId/delete', delComment)
	.get('/:commentId/edit', editComment)
	.put('/:commentId/processedit', processEditComment);

module.exports = router;
