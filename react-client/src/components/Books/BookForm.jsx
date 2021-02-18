import React, { useState } from 'react';
import axios from 'axios';

import { Input } from '@material-ui/core';

function BookForm() {
	// can add author search feature
	// modify state, onSubmit, and form input
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

	console.log(returned);

	return (
		<div>
			<h1>Book</h1>
			<form
				className="book-search"
				onSubmit={(e) => {
					e.preventDefault();
					search(title);
					setTitle('');
				}}
			>
				<label>
					<Input placeholder="Book Title"


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
							}}
						>
							Add Book to Library
						</button>
					</div>
				))}
		</div>
	);
}

export default BookForm;
