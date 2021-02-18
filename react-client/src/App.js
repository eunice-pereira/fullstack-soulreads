//standard imports
import './App.css';
import {
	BrowserRouter as Router,
	Switch as RouterSwitch,
	Route,
} from 'react-router-dom';

//state imports
import React, { useEffect, useState } from 'react';
import { MDBInput } from 'mdbreact';
import axios from 'axios';
import logo from './components/images/zen.png';

import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Member from './components/Member';
import About from './components/About';

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
	// const fetchUser = async () => {
	// 	const resp = await axios.get('/api/user/fetchuser');
	// 	console.log(resp);
	// 	setSessionId(resp.data);
	// };
	// useEffect(() => {
	// 	async function checkLogin() {
	// 		try {
	// 			const resp = await axios.get('/api/user/login-status');
	// 			console.log('you are logged in already');
	// 			setIsLoggedIn(true);
	// 		} catch (e) {
	// 			console.log('not logged in');
	// 			setIsLoggedIn(false);
	// 		}
	// 	}
	// 	checkLogin();
	// }, []);

	return (
		<Router>
			<div className="App">
				{isLoggedIn ? (
					<>
						<header className="App-header">
							{/* <CreateAccount /> */}
							<Login doLogin={doLogin} />
						</header>
					</>
				) : (
						<Member doLogout={doLogout} />
					)}

				<footer>
					<p class="tagline">
						&nbsp;&bull;&nbsp; Read &nbsp;&bull;&nbsp; Learn&nbsp;&bull;&nbsp;
						Connect&nbsp;&bull;&nbsp; Grow &nbsp;&bull;&nbsp;
					</p>
				</footer>
			</div>
		</Router>
	);
};

export default App;