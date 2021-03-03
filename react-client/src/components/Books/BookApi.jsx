import React, { useState } from 'react';
import axios from 'axios';

import { Input } from '@material-ui/core';

function BookApi() {
	// can add author search feature
	// modify state, onSubmit, and form input
	const [titleAuthor, setTitleAuthor] = useState('');
	const [returned, setReturned] = useState([]);
	const [isAdded, setIsAdded] = useState(false);

	const search = (query) => {
		const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms=${query}`;

		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				setReturned(data.items);
			});
	};

	console.log(returned);

	return (
		<div className="book-api-form">
			<h1>Search for a Book in our database!</h1>
			<form
				className="book-search"
				onSubmit={(e) => {
					e.preventDefault();
					search(titleAuthor);
					setTitleAuthor('');
				}}
			>
				<label>
					<Input
						placeholder="Search Title or Author"
						type="text"
						value={titleAuthor}
						onChange={(e) => setTitleAuthor(e.target.value)}
					/>
				</label>
				<input type="submit" value="Search" />
			</form>
			{returned.length !== 0 &&
				returned.map((item, idx) => (
					<div key={item.id} className="book-info-api">
						<h3>{item.volumeInfo.title}</h3>
						<p>{item.volumeInfo.authors}</p>
						<p>{item.volumeInfo.categories}</p>
						<p>{item.volumeInfo.description}</p>
						{item.volumeInfo.imageLinks && (
							<img
								src={item.volumeInfo.imageLinks.thumbnail}
								alt="Book Cover"
							></img>
						)}

						<button
							id={idx}
							onClick={async (e) => {
								// setValues(item);
								let returnedId = e.target.id;
								const bookInfo = {
									bookTitle: returned[returnedId].volumeInfo.title,
									bookAuthor: returned[returnedId].volumeInfo.authors[0],
									bookCategory: returned[returnedId].volumeInfo.categories[0],
									bookImage:
										returned[returnedId].volumeInfo.imageLinks.thumbnail,
									bookDesc: returned[returnedId].volumeInfo.description,
								};
								console.log(bookInfo);
								const resp = await axios.post('/api/book/new-api', bookInfo);
								setIsAdded(true);
							}}
						>
							Add Book to Library
						</button>
					</div>
				))}
		</div>
	);
}

export default BookApi;
