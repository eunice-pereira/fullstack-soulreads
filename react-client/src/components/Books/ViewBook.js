import React, { useState } from 'react';
import axios from 'axios';

// import edit feature
// import add journal entry feature

// view book from library
// edit

const ViewBook = ({ library }) => {
	const [viewbook, setViewBook] = useState('');
	async function viewBook() {
		const resp = await axios.get(`/api/books/:bookId/viewbook`);
		console.log(resp.data);
	}

	return (
		<div className="view-book">
			<p>Title</p>
			<p>Author</p>
			<p>Category</p>
			<p>ISBN</p>
			<p>Description</p>
			<p>Status</p>
			<p></p>
		</div>
	);
};

export default ViewBook;
