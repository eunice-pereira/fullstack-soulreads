import React, { useState } from 'react';
import { Table, NavLink } from 'react-bootstrap';
import axios from 'axios';

const BookTable = (props) => {
	const [library, setLibrary] = useState([]);

	// retrieve member booklist saved to Book model
	async function viewLibrary() {
		const resp = await axios.get('/api/books/booklist');
		console.log(resp.data.books);
		setLibrary(resp.data.books);
	}

	// refresh page after book delete
	const refresh = () => {
		window.location.reload(false);
	};

	let keys = ['Title', 'Author', 'Category', 'ISBN', 'Status', 'Action'];

	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<button className="btn" onClick={viewLibrary}>
				View Library
			</button>

			<Table
				variant="default"
				style={{ width: '100%', margin: '20px auto' }}
				striped
				bordered
				responsive
			>
				<thead>
					<tr>
						{keys.map((heading) => (
							<td key={heading}>{heading}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{library.map((book) => (
						<tr key={book.id}>
							<td>{book.title}</td>
							<td>{book.author}</td>
							<td>{book.category}</td>
							<td>{book.isbn}</td>
							<td>{book.status}</td>
							<td>
								<button
									className="btn"
									onClick={async (e) => {
										let bookId = book.id;
										const resp = await axios
											.post(`/api/books/${bookId}/delete`, bookId)
											.then(() => refresh());
										console.log(resp.data);
									}}
								>
									Delete
								</button>
							</td>
							<td>Edit</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default BookTable;
