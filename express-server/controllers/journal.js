const { Journal } = require('../models');

const journalEntry = async (req, res) => {
	const { id } = req.session.user;
	const { entry } = req.body;

	if (id && entry) {
		const entry = await Entry.create({
			where: {
				memberId: id,
			},
		});
	}
	console.log(`Journal entry added.`);
	res.json({
		message: 'Journal entry added. ',
	});
};

const editEntry = async (req, res) => {
	const { id } = req.session.user;
	const { entry } = req.body;

	if (id && entry) {
		const entry = await Entry.findByPk(id);
	}
	console.log(`Journal entry edited.`);
};

const processEditEntry = async (req, res) => {
	const { id } = req.session.user;
	const { entry } = req.body;

	if (id && entry) {
		const entry = await Entry.update({
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
	const { entry } = req.body;
	if (id && entry) {
		const entry = await Entry.destroy({
			where: {
				memberId: id,
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
	editEntry,
	processEditEntry,
	delEntry,
};
