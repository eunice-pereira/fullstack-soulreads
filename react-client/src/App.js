import './App.css';
import React, { useEffect, useState } from 'react';
import { MDBInput } from 'mdbreact';
import axios from 'axios';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Member from './components/Member';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Logout from './components/Logout';

// import Search from "./Search";
// import Wishlist from './components/Wishlist';
// import Test from './components/Test';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [sessionId, setSessionId] = useState({});

	// Login/Logout callbacks, passing to respective components
	function doLogin() {
		console.log('logged in');
		setIsLoggedIn(true);
	}

	function doLogout() {
		console.log('logged out');
		setIsLoggedIn(false);
	}
	const fetchUser = async () => {
		const resp = await axios.get('/api/user/fetchuser');
		console.log(resp);
		setSessionId(resp.data);
	};
	useEffect(() => {
		if (isLoggedIn) {
			fetchUser();
		}
	}, [isLoggedIn]);

	return (
		<Router>
			<div className="App">
				<Home />
				<CreateAccount />
				<Login doLogin={doLogin} />
				<Logout doLogout={doLogout} />
				<Member sessionId={sessionId} />
			</div>
		</Router>
	);
};

export default App;
