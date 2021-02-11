import React, { useState } from 'react';
import axios from 'axios';

// import edit feature
// import add journal entry feature

// view book from library
// edit

const ViewBook = ({ viewbook }) => {
	return (
		<div className="view-book">
			<p>{viewbook.title}</p>
			<p>{viewbook.author}</p>
			<p>{viewbook.category}</p>
			<p>{viewbook.isbn}</p>
			<p>Image</p>
			<p>Description</p>
			<button>Edit</button>
		</div>
	);
};

export default ViewBook;
