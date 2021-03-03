import React, { useState, useEffect } from 'react';
import AddBook from '../Books/AddBook';
import BookApi from '../Books/BookApi';
import Post from '../Forum/Post';
import Logout from './Logout';
import Library from '../Books/Library';

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
	};
	return (
		<div className="bgholder">
			<div className="member-header">
				<h1 className="member-title">Welcome Soulreader!</h1>
				<Logout doLogout={doLogout} />
			</div>
			<div className="membernav">
				<nav>
					<ul>
						{/* <li><Link to="/Member" className="navbtn " onClick={clicked} >Member<PersonIcon fontSize="large">Member</PersonIcon></Link></li> */}
						<li>
							<Link to="/Library" className=" navbtn">
								Library
								<LibraryBooksIcon fontSize="medium">Library</LibraryBooksIcon>
							</Link>
						</li>
						<li>
							<Link to="/AddBook" className=" navbtn">
								Add Book<CreateIcon fontSize="medium">Book</CreateIcon>
							</Link>
						</li>
						<li>
							<Link to="/Journal" className=" navbtn">
								Journal<CreateIcon fontSize="medium">Journal</CreateIcon>
							</Link>
						</li>
						<li>
							<Link to="/Post" className="navbtn ">
								SoulChat<LoyaltyIcon fontSize="medium">Wishlist</LoyaltyIcon>
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Route path="/AddBook">
				<AddBook />
				<BookApi />
			</Route>

			<Route path="/Library">
				<Library />
			</Route>

			<Route path="/Post">
				<Post />
			</Route>
		</div>
	);
};

export default Member;
