const { Comment } = require('../models');
const getComments = async (req, res) => {
	const { forumId } = req.params;
	const comments = await Comment.findAll({ where: { forumId } })
	res.json({
		message: "found comments", comments
	})
}
const addComment = async (req, res) => {
	const { id } = req.session.user;
	const { comment, forumId } = req.body;
	console.log(req.body);

	if (id && comment) {
		const newComment = await Comment.create({
			comment,
			memberId: id,
			forumId,
		});
		console.log(`Comment added.`);
		res.json({
			message: 'Comment added.',
		});
	} else {
		res.json({
			message: 'not logged in',
		});
	}
};

const editComment = async (req, res) => {
	const { id } = req.session.user;
	const { forumId } = req.params;
	if (id && { forumId }) {
		const comment = await Comment.findByPk(forumId);
	}
	console.log(`Your are editing a comment for ${forumId}.`);
};

const processEditComment = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;
	if (id && { forumId }) {
		const updateComment = await Comment.update({
			where: {
				memberId: id,
			},
		});
	}

	console.log(`Comment updated.`);
	res.json({
		message: 'Comment updated.',
	});
};

const delComment = async (req, res) => {
	const { id } = req.session.user;
	const { forumId } = req.params;
	if (id && forumId) {
		const comment = await Comment.destroy({
			where: {
				id: forumId,
			},
		});
		console.log(` deleted a comment from ${forumId}.`);
		res.json({
			message: 'Deleting comment',
			id: forumId,
		});
	}
};

module.exports = {
	addComment,
	delComment,
	processEditComment,
	editComment,
	getComments
};
