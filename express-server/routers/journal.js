const express = require('express');
const router = express.Router();

const {
	journalEntry,
	editEntry,
	processEditEntry,
	delEntry,
	getEntries,
} = require('../controllers/journal');

router

	.post('/new', journalEntry)
	.post('/:journalId/delete', delEntry)
	.get('/editentry', editEntry)
	.put('/processeditentry', processEditEntry)
	.get('/entries', getEntries);

module.exports = router;
