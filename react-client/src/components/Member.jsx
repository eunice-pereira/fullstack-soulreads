import React, { useState, useEffect } from 'react';
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import Forum from './Forum/Forum';
import Logout from './Logout';
import Library from './Books/Library';

//material ui imports
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Member = ({ sessionId, doLogout }) => {
	console.log(sessionId, 'member component');
	return (
		<div>
			<h1>Member Profile</h1>
			<nav >
				<ul>
					<li><a href="/Member.js" class="navbtn " >Member<PersonIcon fontSize="large">Member</PersonIcon></a></li>
					<li><a href="/Library.js" class=" navbtn">Library<LibraryBooksIcon fontSize="large">Library</LibraryBooksIcon></a></li>
					<li><a href="/Displaywish.js" class="navbtn ">Wishlist<LoyaltyIcon fontSize="large">Wishlist</LoyaltyIcon></a></li>
					<li><a href="/Journal.js" class=" navbtn">Journal<CreateIcon fontSize="large">Journal</CreateIcon></a></li>
				</ul >
			</nav >
			<Logout doLogout={doLogout} />
			<AddBook />
			<BookForm />
			<Library />
			<Forum />
		</div>
	);
};

export default Member;
