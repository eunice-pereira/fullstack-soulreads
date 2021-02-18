//standard imports
import './App.css';
import {
	BrowserRouter as Router,
	Switch as RouterSwitch,
	Route
} from 'react-router-dom';

//state imports
import React, { useEffect, useState } from 'react';
import { MDBInput } from 'mdbreact';
import axios from 'axios';
import logo from './components/images/zen.png';

// import Home from './components/Home';
// import Navigation from './components/Navigation';
// import Background from './components/Background';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
// import Logout from './components/Logout';
import Member from './components/Member';
import About from './components/About';

// import Search from './components/BookForm';
// import CreateAccount from './components/CreateAccount';
import AddModal from './components/DeleteModal';
import DeleteModal from './components/DeleteModal';
// import Forum from './Forum';

// import BookAccordion from './components/BookAccordian';


import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';



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

	return (
		<Router>
			<div className="App">
				{isLoggedIn ? (
					<>
						{/* <Logout doLogout={doLogout} /> */}
						<Member sessionId={sessionId} doLogout={doLogout} />
					</>
				) : (
					<header className="App-header">
						{/* <CreateAccount /> */}
						<Login doLogin={doLogin} />
						{/* <Home /> */}
					</header>
				)}

				<footer>
					<p class="tagline">
						&nbsp;&bull;&nbsp; Read &nbsp;&bull;&nbsp; Learn&nbsp;&bull;&nbsp;
						Connect&nbsp;&bull;&nbsp; Grow &nbsp;&bull;&nbsp;
					</p>
				</footer>

			</div>

		</Router >
	);
};

export default App;
