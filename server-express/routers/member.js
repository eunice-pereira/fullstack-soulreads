const express = require('express');
const router = express.Router();

const { showJournal, showWishlist, explore } = require('../controllers/member');

router
	.get('/journal', showJournal)
	// .post('/journal', postEntry)
	.get('/wishlist', showWishlist);

module.exports = router;
