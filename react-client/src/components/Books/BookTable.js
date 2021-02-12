import React, { useState } from 'react';
import { Table, NavLink } from 'react-bootstrap';
import axios from 'axios';
import ViewBook from './ViewBook';

const BookTable = (props) => {
	const [library, setLibrary] = useState([]);
	const [viewbook, setViewBook] = useState(null);

	// retrieve member library saved to Book model
	async function viewLibrary() {
		const resp = await axios.get('/api/books/booklist');
		console.log(resp.data.books);
		setLibrary(resp.data.books);
	}

	// table headings
	let keys = ['Title', 'Author', 'Category', 'Status', 'View', 'Delete'];

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
							<td>{book.status}</td>
							<td>
								<button
									className="btn"
									onClick={async (e) => {
										let bookId = book.id;
										const resp = await axios.get(
											`/api/books/${bookId}/viewbook`
										);
										console.log(resp.data.book);
										setViewBook(resp.data.book);
									}}
								>
									View
								</button>
							</td>
							<td>
								<button
									className="btn"
									onClick={async (e) => {
										let bookId = book.id;
										const resp = await axios
											.post(`/api/books/${bookId}/delete`, bookId)
											.then(() => viewLibrary());
									}}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			{viewbook && <ViewBook viewbook={viewbook} />}
		</div>
	);
};

export default BookTable;
