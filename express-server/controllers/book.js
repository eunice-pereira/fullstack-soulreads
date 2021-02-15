const { Book } = require('../models');
const { Library } = require('../models');

const processBookForm = async (req, res) => {
	const { title, author, category, isbn, status, intention } = req.body;
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
		// const newLibraryItem = await Library.create({
		// 	intention,
		// 	bookId: newBook.id,
		// });

		console.log(newBook);
		res.json({
			status: 'manual book add successful',
			id: newBook.id,
		});
	}
};

const addBookApi = async (req, res) => {
	console.log('new book from api');
	const { bookTitle, bookAuthor, bookCategory, bookDesc, bookImage } = req.body;
	const { id } = req.session.user;

	if (bookTitle && id) {
		const newBook = await Book.create({
			title: bookTitle,
			author: bookAuthor,
			category: bookCategory,
			memberId: id,
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
			books,
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
			book,
		});
	}
};

const showEditList = async (req, res) => {
	const { id } = req.session.user;
	const { bookId } = req.params;
	if (id && bookId) {
		const book = await Book.findByPk(bookId);

		console.log(`You are editing Book item with id ${bookId}.`);
		res.json({
			message: 'showing book to edit',
			id: bookId,
		});
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
		res.json({
			message: 'book item updated',
			id: bookId,
		});
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
		res.json({
			message: 'book deleted successfully',
			id: bookId,
		});
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
