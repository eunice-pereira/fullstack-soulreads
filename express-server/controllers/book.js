const { Book } = require('../models');
const { Library } = require('../models');

const addManualBook = async (req, res) => {
	const { title, author, category, isbn, status, intention } = req.body;
	const { id } = req.session.user;

	if (title && author && id) {
		const newBook = await Book.create({
			title,
			author,
			category,
			isbn,
			status,
			memberId: id,
		});
		const newLibraryItem = await Library.create({
			intention,
			memberId: id,
			bookId: newBook.id,
		});

		console.log(newBook);
		res.json({
			status: 'manual book add successful',
			id: newBook.id,
		});
	}
};

const addBookApi = async (req, res) => {
	const { bookTitle, bookAuthor, bookCategory, bookDesc, bookImage } = req.body;
	const { id } = req.session.user;

	if (bookTitle && id) {
		const newBook = await Book.create({
			title: bookTitle,
			author: bookAuthor,
			category: bookCategory,
			content: bookImage,
			description: bookDesc,
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
		// const book = await Book.findByPk(bookId);
		const book = await Book.findByPk(bookId);
		console.log(`viewing Book item with id ${bookId}.`);
		res.json({
			message: 'viewing book',
			book,
		});
	}
};

const editBook = async (req, res) => {
	const { id } = req.session.user;
	const { bookId } = req.params;
	const { title, author, status, category, intention } = req.body;

	if (id && bookId) {
		const book = await Book.update(
			{
				title,
				author,
				category,
				status,
			},
			{
				where: {
					id: bookId,
				},
			}
		);
		const library = await Library.update(intention, {
			where: {
				id: bookId,
			},
		});
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
	if (bookId) {
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
	addManualBook,
	showBookList,
	delBook,
	editBook,
	viewBook,
	addBookApi,
};
