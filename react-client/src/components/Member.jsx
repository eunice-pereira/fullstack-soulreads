import React, { useState, useEffect } from 'react';
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import BookTable from './Books/BookTable';
import Forum from './Forum/Forum';
import Logout from './Logout';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Member = ({ sessionId, doLogout }) => {
	console.log(sessionId, 'member component');
	return (
		<div>
			<h1>Member Profile</h1>
			<Logout doLogout={doLogout} />
			<AddBook />
			{/* <BookForm />
			<BookTable />
			<Forum /> */}
		</div>
	);
};

export default Member;
