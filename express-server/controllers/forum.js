const { Forum } = require('../models');
const { Book } = require('../models');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

// create forum post with desc + find book from library
const addForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { description, book } = req.body;

	if (id && description && book) {
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
// find library item by either author or title
const findLibraryItem = async (req, res) => {
	const { id } = req.session.user;
	const { search } = req.query;
	console.log(req);

	if (id && search) {
		const libraryItem = await Book.findAll({
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
			libraryItem,
		});
	}
};

// query through Forum posts to show on front end SoulChat
const getForumPosts = async (req, res) => {
	const posts = await Forum.findAll({
		order: [['createdAt', 'desc']],
		include: [
			{
				model: Book,
				attributes: ['title', 'author', 'status'],
			},
		],
	});
	res.json({
		posts,
	});
};
const editForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { postId } = req.params;
	const { description } = req.body;
	if (id && postId) {
		const forumPost = await Forum.update(
			{
				description,
			},
			{
				where: {
					id: postId,
				},
			}
		);
		res.json({
			message: 'soulchat desc updated',
			id: postId,
		});
	}
};

const delForumPost = async (req, res) => {
	const { id } = req.session.user;
	const { postId } = req.params;
	if (id && postId) {
		const forumPost = await Forum.destroy({
			where: {
				id: postId,
			},
		});
		res.json({
			message: 'post deleted successfully',
			id: postId,
		});
	}
};

module.exports = {
	addForumPost,
	findLibraryItem,
	delForumPost,
	editForumPost,
	getForumPosts,
};
