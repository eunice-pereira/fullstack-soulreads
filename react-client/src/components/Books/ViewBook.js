import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Journal from '../Forum/Journal';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Button, Input } from '@material-ui/core';

const ViewBook = ({ viewbook }) => {
	const [editing, setEditing] = useState(false);
	const [editTitle, setEditTitle] = useState('');
	const [editAuthor, setEditAuthor] = useState('');
	const [editCategory, setEditCategory] = useState('');
	const [editStatus, setEditStatus] = useState('');
	const [editIntention, setEditIntention] = useState('');

	useEffect(() => {
		setEditTitle(viewbook.title);
		setEditAuthor(viewbook.author);
		setEditCategory(viewbook.category);
		setEditStatus(viewbook.status);
		setEditIntention(viewbook.intention);
	}, [viewbook]);

	if (editing) {
		return (
			<div>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						const resp = await axios.put(`/api/books/${viewbook.id}/edit`, {
							title: editTitle,
							author: editAuthor,
							category: editCategory,
							status: editStatus,
							intention: editIntention,
						});
					}}
				>
					<TextField id="standard" label="Title">
						<div>
							<input
								value={editTitle}
								onChange={(e) => setEditTitle(e.target.value)}
							/>
						</div>
					</TextField>

					<TextField id="standard-basic" label="Author">
						<div>
							<input
								value={editAuthor}
								onChange={(e) => setEditAuthor(e.target.value)}
							/>
						</div>
					</TextField>

					<TextField id="standard-basic" label="Category">
						<div>
							<input
								value={editCategory}
								onChange={(e) => setEditCategory(e.target.value)}
							/>
						</div>
					</TextField>

					<div className="dropdown">
						<FormControl>
							<InputLabel>Status</InputLabel>
							<Select
								value={editStatus}
								onChange={(e) => setEditStatus(e.target.value)}
							>
								<option>Status</option>
								<option value="Wishlist">Wishlist</option>
								<option value="Currently reading">Currently Reading</option>
								<option value="Purchased">Purchased</option>
								<option value="Completed">Completed</option>
							</Select>
						</FormControl>
					</div>

					<TextField
						className="intention"
						id="standard-basic"
						label="Intention"
					>
						Intention
						<div>
							<input
								value={editIntention}
								onChange={(e) => setEditIntention(e.target.value)}
							/>
						</div>
					</TextField>

					<Button color="secondary">
						<input type="submit" value="Update" />
					</Button>
				</form>
				<Button className="btn" onClick={() => setEditing(false)}>
					<KeyboardBackspaceIcon fontSize="small"></KeyboardBackspaceIcon>
				</Button>
			</div>
		);
	} else {
		return (
			<div className="view-book">
				{/* <p>{viewbook.title}</p>
				<p>Author: {viewbook.author}</p>
				<p>Category: {viewbook.category}</p>
				<p>ISBN: {viewbook.isbn}</p>
				<p>Intention: {viewbook.intention}</p> */}

				<Button
					color="primary"
					variant="contained"
					className="btn"
					onClick={() => setEditing(true)}
				>
					Edit
				</Button>
				<Journal />
			</div>
		);
	}
};

export default ViewBook;
