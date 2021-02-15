import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [category, setCategory] = useState('');
	const [isbn, setIsbn] = useState('');
	const [status, setStatus] = useState('');

	const newBook = async (e) => {
		e.preventDefault();
		let book = {
			title,
			author,
			category,
			isbn,
			status,
		};
		const resp = await axios.post('/api/books/newbook', book);
		console.log(resp.data);
	};

	return (
		<form align="center" method="POST" onSubmit={newBook}>
			<h2>Add New Book</h2>

			<div className="form-group">
				<label>
					Title:
					<input
						autoFocus
						name="title"
						type="text"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					Author:
					<input
						name="author"
						type="text"
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					Category:
					<input
						name="category"
						type="text"
						onChange={(e) => setCategory(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					ISBN:
					<input
						name="isbn"
						type="text"
						onChange={(e) => setIsbn(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					Status:
					<select name="status" onChange={(e) => setStatus(e.target.value)}>
						<option value="Wishlist">Wishlist</option>
						<option value="Currently reading">Currently Reading</option>
						<option value="Purchased">Purchased</option>
						<option value="Completed">Completed</option>
					</select>
				</label>
			</div>
			<div>
				<input type="submit" value="Add Book" />
			</div>
		</form>
	);
};
// needs redirect to member profile

export default AddBook;
