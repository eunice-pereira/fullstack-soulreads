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

import Home from './components/Home';
import Navigation from './components/Navigation';
import Background from './components/Background';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Logout from './components/Logout';
import Member from './components/Member';
import About from './components/About';

// import Search from './components/BookForm';
// import CreateAccount from './components/CreateAccount';
import AddModal from './components/DeleteModal';
import DeleteModal from './components/DeleteModal';
import Forum from './components/Forum';

// import BookAccordion from './components/BookAccordian';


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
				<RouterSwitch>
					{/* <Background></Background> */}
					{/* <Home /> */}
					{/* <CreateAccount /> */}


					<Route path="/" exact><Login doLogin={doLogin} /></Route>


					<Route path="/Member" exact>
						<Navigation>
							<About></About>
							<Logout doLogout={doLogout} />
						</Navigation>
						<AddModal></AddModal>
						<DeleteModal></DeleteModal>
						<Member sessionId={sessionId} />
					</Route>
				</RouterSwitch>
			</div>

		</Router >
	);
};

export default App;
