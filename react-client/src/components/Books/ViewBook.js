import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import add journal entry feature

const ViewBook = ({ viewbook }) => {
	const [editing, setEditing] = useState(false);
	const [editTitle, setEditTitle] = useState('');
	const [editAuthor, setEditAuthor] = useState('');
	const [editCategory, setEditCategory] = useState('');
	const [editStatus, setEditStatus] = useState('');

	useEffect(() => {
		setEditTitle(viewbook.title);
		setEditAuthor(viewbook.author);
		setEditCategory(viewbook.category);
		setEditStatus(viewbook.status);
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
						});
					}}
				>
					<label>
						Title
						<div>
							<input
								value={editTitle}
								onChange={(e) => setEditTitle(e.target.value)}
							/>
						</div>
					</label>

					<label>
						Author
						<div>
							<input
								value={editAuthor}
								onChange={(e) => setEditAuthor(e.target.value)}
							/>
						</div>
					</label>

					<label>
						Category
						<div>
							<input
								value={editCategory}
								onChange={(e) => setEditCategory(e.target.value)}
							/>
						</div>
					</label>

					<div>
						<select
							value={editStatus}
							onChange={(e) => setEditStatus(e.target.value)}
						>
							<option>Status</option>
							<option value="Wishlist">Wishlist</option>
							<option value="Currently reading">Currently Reading</option>
							<option value="Purchased">Purchased</option>
							<option value="Completed">Completed</option>
						</select>
					</div>
					<input className="btn" type="submit" value="Update" />
				</form>
				<button className="btn" onClick={() => setEditing(false)}>
					Back to View
				</button>
			</div>
		);
	} else {
		return (
			<div className="view-book">
				<p>{viewbook.title}</p>
				<p>{viewbook.author}</p>
				<p>{viewbook.category}</p>
				<p>{viewbook.isbn}</p>

				<button className="btn" onClick={() => setEditing(true)}>
					Edit
				</button>
			</div>
		);
	}
};

export default ViewBook;
