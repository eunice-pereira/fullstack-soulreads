const express = require('express');
const router = express.Router();

const {
	addComment,
	delComment,
	processEditComment,
	editComment,
} = require('../controllers/comment');

router

.post('/addcomment', addComment)
.post('/deletecomment', delComment)
.get('/editcomment', editComment)
.put('/processedit', processEditComment);


module.exports = router;
