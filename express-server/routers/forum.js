const express = require('express');
const router = express.Router();

const {
	addForumPost,
	findLibraryItem,
	delForumPost,
	editForumPost,
} = require('../controllers/forum');

router
	.post('/newpost', addForumPost)
	.put('/:forumId/editpost', editForumPost)
	.get('/newpost', findLibraryItem)
	.post('/:forumId/delete', delForumPost);

module.exports = router;
