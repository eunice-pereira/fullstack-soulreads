const express = require('express');
const router = express.Router();

const {
    journalEntry,
    editEntry,
    processEditEntry,
    delEntry,
} = require('../controllers/journal');

router 

.post('/journalentry', journalEntry)
.post('/deleteentry', delEntry)
.get('/editentry', editEntry)
.put('/processeditentry', processEditEntry);

module.exports = router;