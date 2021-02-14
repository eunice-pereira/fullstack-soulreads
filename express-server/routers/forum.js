const express = require('express');
const router = express.Router();

const {
	addForumPost,
	findLibraryItem,
	delForumPost,
	editForumPost,
	getForumPosts,
} = require('../controllers/forum');

router
	.post('/newpost', addForumPost)
	.put('/:postId/edit', editForumPost)
	.get('/newpost', findLibraryItem)
	.post('/:postId/delete', delForumPost)
	.get('/soulchat', getForumPosts);

module.exports = router;
