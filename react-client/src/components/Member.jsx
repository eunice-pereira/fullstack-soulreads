import React, { useState, useEffect } from 'react';
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import Forum from './Forum/Forum';
import Logout from './Logout';
import Library from './Books/Library';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Member = ({ sessionId, doLogout }) => {
	console.log(sessionId, 'member component');
	return (
		<div>
			<h1>Member Profile</h1>
			<Logout doLogout={doLogout} />
			<AddBook />
			<BookForm />
			<Library />
			<Forum />
		</div>
	);
};

export default Member;
