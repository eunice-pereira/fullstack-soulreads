const { Post } = require('../models');
const { layout } = require('../utils');

// show member comments on books
const showJournal = (req, res) => {
	res.render('journal');
};

// post comment

// delete comment

// edit comment

// show wishlist status books only
const showWishlist = (req, res) => {
	res.render('wishlist');
};

module.exports = {
	showJournal,
	showWishlist,
};
