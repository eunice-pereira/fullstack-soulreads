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
import background from './components/images/login.jpg';
import background2 from './components/images/book_wall.jpeg';

import CreateAccount from './components/Home/CreateAccount';
import Login from './components/Home/Login';
import Member from './components/Member/Member';
import About from './components/Home/About';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function doLogin() {
		console.log('logged in');
		setIsLoggedIn(true);
	}

	function doLogout() {
		console.log('logged out');
		setIsLoggedIn(false);
	}

	useEffect(() => {
		async function checkLogin() {
			try {
				const resp = await axios.get('/api/user/login-status');
				console.log('you are logged in already');
				setIsLoggedIn(true);
			} catch (e) {
				console.log('not logged in');
				setIsLoggedIn(false);
			}
		}
		checkLogin();
	}, []);

	let appClass = 'App';
	if (!isLoggedIn) {
		appClass += ' login-background ';
	}

	return (
		<Router>
			<div className={appClass}>
				{isLoggedIn ? (
					<>
						{/* <div className="background">
							<img src={background2} />
						</div> */}
						<Member doLogout={doLogout} />
					</>
				) : (
					<>
						<div className="background">
							<img src={background} />
						</div>
						<header className="App-header">
							<Login doLogin={doLogin} />
							<CreateAccount />
						</header>
						<footer className="tagline">
							<p>
								&nbsp;&bull;&nbsp; Read &nbsp;&bull;&nbsp;
								Learn&nbsp;&bull;&nbsp; Connect&nbsp;&bull;&nbsp; Grow
								&nbsp;&bull;&nbsp;
							</p>
						</footer>
					</>
				)}
			</div>
		</Router>
	);
};

export default App;
