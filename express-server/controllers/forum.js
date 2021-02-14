const { Forum } = require('../models');
const { Book } = require('../models');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

// create forum post with desc + find book from library
const addForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { description, book } = req.body;

	if (id && description) {
		const forumEntry = await Forum.create({
			description,
			bookId: book,
			memberId: id,
		});

		res.json({
			status: 'new forum post created',
			forumId: forumEntry.id,
		});
	}
};
// find library item to go along with above post
const findLibraryItem = async (req, res) => {
	const { id } = req.session.user;
	const { search } = req.query;
	console.log(req);

	if (id && search) {
		const libraryTitle = await Book.findAll({
			where: {
				[Op.or]: {
					title: Sequelize.where(
						Sequelize.fn('concat', Sequelize.col('title')),
						{
							[Op.iLike]: '%' + search + '%',
						}
					),
					author: Sequelize.where(
						Sequelize.fn('concat', Sequelize.col('author')),
						{
							[Op.iLike]: '%' + search + '%',
						}
					),
				},
			},
		});
		res.json({
			message: 'book retrieved from library',
			libraryTitle,
		});
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
