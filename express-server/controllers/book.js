const { Book } = require('../models');
const { layout } = require('../utils');



const processBookForm = async (req, res) => {
	const { title, author, category, isbn, status } = req.body;
	const { id } = req.session.user;
	console.log(title, author);

	if (title && author && status && id) {
		const newBook = await Book.create({
			title,
			author,
			category,
			isbn,
			status,
			memberId: id,
		});
		console.log(newBook);
		res.json({
			status: 'processing book form',
			id: newBook.id,
		});
	}
};

const addBookApi = async (req, res) => {
	console.log('new book from api');
	const { bookTitle, bookAuthor, bookCategory, bookDesc, bookImage } = req.body;
	// const { id } = req.session.user

	if (bookTitle) {
		const newBook = await Book.create({
			title: bookTitle,
			author: bookAuthor,
			category: bookCategory,
			// memberId: id,
		});
		res.json({
			status: 'api book added successfully',
			bookid: newBook.id,
		});
	}
};

const showBookList = async (req, res) => {
	const { id } = req.session.user;

	if (id) {
		const books = await Book.findAll({
			where: {
				memberId: id,
			},
		});
		res.json({
			message: 'showing book list',
		});
	}
};

const viewBook = async (req, res) => {
	const { id } = req.session.user;
	const { bookId } = req.params;
	if (id && bookId) {
		const book = await Book.findByPk(bookId);
		console.log(`You are viewing Book item with id ${bookId}.`);
		res.json({
			message: 'viewing book',
		});
	}
};

const showEditList = async (req, res) => {
	const { id } = req.session.user;
	const { bookId } = req.params;
	if (id && bookId) {
		const book = await Book.findByPk(bookId);

		console.log(`You are editing Book item with id ${bookId}.`);
		res.render('edit', {
			locals: {
				book,
			},
			...layout,
		});
	} else {
		res.redirect('/member-profile');
	}
};

const processEditList = async (req, res) => {
	const { id } = req.session.user;
	const { bookId } = req.params;
	const { title, author, status } = req.body;

	if (id && bookId) {
		const book = await Book.update(
			{
				title,
				author,
				status,
			},
			{
				where: {
					id: bookId,
				},
			}
		);
		console.log(`You updated Book item with id ${bookId}.`);
		res.redirect('/booklist');
	} else {
		res.redirect('/');
	}
};

const delBook = async (req, res) => {
	const { id } = req.session.user;
	const { bookId } = req.params;
	if (id && bookId) {
		const book = await Book.destroy({
			where: {
				id: bookId,
			},
		});
		console.log(`You deleted book item with id ${bookId}.`);
		res.redirect('/booklist');
	} else {
		res.redirect('/');
	}
};

module.exports = {
	processBookForm,
	showBookList,
	delBook,
	showEditList,
	processEditList,
	viewBook,
	addBookApi,
};
