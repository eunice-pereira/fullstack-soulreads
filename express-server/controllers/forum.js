const { Forum } = require('../models');
const { Book } = require('../models');

// create forum post with desc + find book from library
const addForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { description } = req.body;

	if (id && description) {
		const forumEntry = await Forum.create({
			description,
		});

		res.json({
			status: 'new forum post created',
			id: forumEntry.id,
		});
	}
};
// find library item to go along with above post
const findLibraryItem = async (req, res) => {
	const { id } = req.session.user;
	const { title, author } = req.body;

	if (id && title) {
		const libraryBook = await Book.findOne({
			where: {
				title,
			},
		});
		res.json(libraryBook);
	} else if (id && author) {
		const libraryAuthors = await Book.findAll({
			where: {
				author,
			},
		});
		res.json(libraryAuthors);
	}
};

// upload image

// edit forum post
const editForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { forumId } = req.params;
	const { description, libraryBook } = req.body;
	if (id && forumId) {
		const forumPost = await Forum.update(
			{
				description,
			},
			{
				where: {
					id: forumId,
				},
			}
		);
		res.json({
			message: 'forum post updated',
			id: forumId,
		});
	}
};

// delete forum post
const delForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { forumId } = req.params;
	if (id && forumId) {
		const forumPost = await Forum.destroy({
			where: {
				id: forumId,
			},
		});
		res.json({
			message: 'post deleted successfully',
			id: forumId,
		});
	}
};

module.exports = {
	addForumPost,
	findLibraryItem,
	delForumPost,
	editForumPost,
};
