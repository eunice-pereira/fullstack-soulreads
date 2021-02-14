import React, { useState, useEffect } from 'react';
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import Journal from './Journal';
import BookTable from './Books/BookTable';
import Forum from './Forum';

const Member = ({ sessionId }) => {
	console.log(sessionId, 'member component');
	return (
		<div>
			<h1>Member Profile</h1>
			<AddBook />
			<BookForm />
			<BookTable />
			<Forum />
		</div>
	);
};

export default Member;
