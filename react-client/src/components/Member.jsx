import React, { useState, useEffect } from 'react';
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import Forum from './Forum/Forum';
import Logout from './Logout';
import Library from './Books/Library';
import Login from './Login';

import { Link, Route } from 'react-router-dom';




import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//material ui imports
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CreateIcon from '@material-ui/icons/Create';

const Member = ({ sessionId, doLogout }) => {
	console.log(sessionId, 'member component');
	const [memberclick, setMemberClick] = useState(false);
	const [home, setHome] = useState(true);
	const clicked = () => {
		// setMemberClick(!memberclick);


	}
	return (
		<div className="bgholder" >
			<div className="member-header">
				<h1 className="member-title">Welcome to SoulReads</h1>
				<Logout doLogout={doLogout} />
			</div>
			<div className="membernav">
				<nav>
					<ul>
						{/* <li><Link to="/Member" className="navbtn " onClick={clicked} >Member<PersonIcon fontSize="large">Member</PersonIcon></Link></li> */}
						<li><Link to="/Library" className=" navbtn">Library<LibraryBooksIcon fontSize="large">Library</LibraryBooksIcon></Link></li>
						<li><Link to="/Forum" className="navbtn " >SoulChat<LoyaltyIcon fontSize="large">Wishlist</LoyaltyIcon></Link></li>
						<li><Link to="/AddBook" className=" navbtn" >Add Book<CreateIcon fontSize="large">Journal</CreateIcon></Link></li>
					</ul>
				</nav>
			</div>



			<Route path="/AddBook">
				<AddBook />
				<BookForm />
			</Route>


			<Route path="/Library">
				<Library />

			</Route>

			<Route path="/Forum">
				<Forum />
			</Route>

		</div>
	);
};

export default Member;
