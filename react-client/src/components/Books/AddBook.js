import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

//material ui imports
import { Input, Select } from '@material-ui/core';

const AddBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [category, setCategory] = useState('');
	const [isbn, setIsbn] = useState('');
	const [status, setStatus] = useState('');
	const [intention, setIntention] = useState('');
	const [successfulAdd, setSuccessfulAdd] = useState(false);

	// const history = useHistory();

	const newBook = async (e) => {
		e.preventDefault();
		let book = {
			title,
			author,
			category,
			isbn,
			status,
			intention,
		};
		const resp = await axios.post('/api/books/newbook', book);
		console.log(resp.data);
		setSuccessfulAdd(true);
		// history.push('/Library');
	};

	return (
		<form align="center" onSubmit={newBook}>
			<h2>Add New Book</h2>
			<div className="addbook-intro-intention">
				<p>
					Add a new book manually, with book details to your liking. You can
					also add a book intention. Maybe it was a suggestion from a friend, or
					the book was recommended on your social media. Intentions are a way to
					journal your personal notes upon book addition.{' '}
				</p>
			</div>
			<div className="form-group">
				<label>
					<Input
						placeholder="Title"
						autoFocus
						name="title"
						type="text"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					<Input
						placeholder="Author"
						name="author"
						type="text"
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					<Input
						placeholder="Category"
						name="category"
						type="text"
						onChange={(e) => setCategory(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					<Input
						placeholder="ISBN"
						name="isbn"
						type="text"
						onChange={(e) => setIsbn(e.target.value)}
					/>
				</label>
			</div>
			<div className="form-group">
				<label>
					<Select name="status" onChange={(e) => setStatus(e.target.value)}>
						<option value="Wishlist">Wishlist</option>
						<option value="Currently reading">Currently Reading</option>
						<option value="Purchased">Purchased</option>
						<option value="Completed">Completed</option>
					</Select>
				</label>
			</div>
			<div>
				<label>
					<Input
						placeholder="Book Intention"
						autoFocus
						type="textarea"
						name="intention"
						rows="3"
						outline
						onChange={(e) => setIntention(e.target.value)}
					/>
				</label>
			</div>

			<input className="add-book" type="submit" value="Add Book" />
			<Switch>
				<Route path="/AddBook" exact>
					{successfulAdd && <Redirect to="/Library" />}
				</Route>
			</Switch>
		</form>
	);
};
// needs redirect to member profile

export default AddBook;
