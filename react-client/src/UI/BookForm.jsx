import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookForm(props) {
	const [title, setTitle] = useState('');
	const [returned, setReturned] = useState([]);

	const search = (query) => {
		const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms=${query}`;

		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				setReturned(data.items);
			});
	};

	// useEffect((e) => {
	// 	search();
	// }, []);
	console.log(returned);

	// set values

	// const setValues = (item) => {
	// 	setBookTitle(item.volumeInfo.title);
	// 	setBookAuthor(item.volumeInfo.authors);
	// 	setBookCategory(item.volumeInfo.categories);
	// 	setBookDesc(item.volumeInfo.description);
	// 	setBookImage(item.volumeInfo.imageLinks.thumbnail);
	// };

	// Make array of objects
	// Loop through bookArray compare object id with Returned list id
	// If id's match > pull object from bookArray and pass into axios request

	// const bookArray = []; //UseState
	// const bookValues = (item) => {
	// 	const book = {};
	// 	book.push('id', item.volumeInfo.id);
	// 	book.push('title', item.volumeInfo.title);
	// 	book.push('author', item.volumeInfo.authors);
	// 	book.push('category', item.volumeInfo.categories);
	// 	book.push('desc', item.volumeInfo.description);
	// 	book.push('image', item.volumeInfo.imageLinks.thumbnail);
	// 	bookArray.push(book);
	// };

	return (
		<div>
			<form
				className="book-search"
				onSubmit={(e) => {
					e.preventDefault();
					search(title);
					setTitle('');
				}}
			>
				<label>
					Book Title:
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<input type="submit" value="Search" />
			</form>
			{returned.length &&
				returned.map((item, idx) => (
					<div key={item.id} className="book-info-api">
						<h3>{item.volumeInfo.title}</h3>
						<p>{item.volumeInfo.authors}</p>
						<p>{item.volumeInfo.categories}</p>
						<p>{item.volumeInfo.description}</p>
						<img
							src={item.volumeInfo.imageLinks.thumbnail}
							alt="Book Cover"
						></img>

						<button
							id={idx}
							onClick={async (e) => {
								// setValues(item);
								let returnedId = e.target.id;
								const bookInfo = {
									bookTitle: returned[returnedId].volumeInfo.title,
									bookAuthor: returned[returnedId].volumeInfo.authors[0],
									bookCategory: returned[returnedId].volumeInfo.categories[0],
									// bookDesc,
									// bookImage,
								};
								console.log(bookInfo);
								const resp = await axios.post('/api/books/bookapi', bookInfo);
								console.log(resp.data);
							}}
						>
							add book
						</button>
					</div>
				))}
		</div>
	);
}

export default BookForm;
