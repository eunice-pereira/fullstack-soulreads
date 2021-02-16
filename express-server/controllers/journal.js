const { Journal } = require('../models');

const journalEntry = async (req, res) => {
	const { id } = req.session.user;
	const { content } = req.body;

	if (id && content) {
		const newEntry = await Journal.create({
			content,
			memberId: id,
		});
	}
	console.log(`Journal entry added.`);
	res.json({
		message: 'Journal entry added. ',
	});
};
const getEntries = async (req, res) => {
	const { id } = req.session.user;

	if (id) {
		const entries = await Journal.findAll({
			order: [['createdAt', 'desc']],
		});
		res.json({
			entries,
		});
	}
};

const editEntry = async (req, res) => {
	const { id } = req.session.user;
	const { entry } = req.body;

	if (id && entry) {
		const entry = await Journal.findByPk(id);
	}
	console.log(`Journal entry edited.`);
};

const processEditEntry = async (req, res) => {
	const { id } = req.session.user;
	const { entry } = req.body;

	if (id && entry) {
		const entry = await Journal.update({
			where: {
				memberId: id,
			},
		});
	}
	console.log(`Entry updated.`);
	res.json({
		message: 'Entry updated.',
	});
};

const delEntry = async (req, res) => {
	const { id } = req.session.user;
	const { journalId } = req.params;
	if (id && journalId) {
		const entry = await Journal.destroy({
			where: {
				id: journalId,
			},
		});
	}
	console.log(`deleted a journal entry.`);
	res.json({
		message: 'Deleted entry.',
	});
};

module.exports = {
	journalEntry,
	getEntries,
	editEntry,
	processEditEntry,
	delEntry,
};
