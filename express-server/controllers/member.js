const { Post } = require('../models');
const { layout } = require('../utils');

// show member comments on books
const showJournal = (req, res) => {
	res.render('journal');
};

// show wishlist status books only
const showWishlist = (req, res) => {
	res.render('wishlist');
};

module.exports = {
	showJournal,
	showWishlist,
};
