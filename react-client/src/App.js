import './App.css';
import React, { useEffect, useState } from 'react';
import { MDBInput } from 'mdbreact';

import BookForm from './components/BookForm';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Journal from './components/Journal';
import Login from './components/Login'
import Search from './components/BookForm';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Logout from './components/Logout';



// import Search from "./Search";
// import Wishlist from './components/Wishlist';
// import Test from './components/Test';

import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Login/Logout callbacks, passing to respective components
	function doLogin() {
		console.log('logged in');
		setIsLoggedIn(true);
	}

	function doLogout() {
		console.log('logged out');
		setIsLoggedIn(false);
	}

	return (
		<Router>
			<div className="App">
				<Home />
				<CreateAccount />
				<Login doLogin={doLogin} />
				<Logout doLogout={doLogout} />
				<BookForm />
			</div>
		</Router >
	);
};

export default App;
