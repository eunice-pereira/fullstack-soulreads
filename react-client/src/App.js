//standard imports
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

//state imports
import React, { useEffect, useState } from 'react';

//component imports
import About from './components/About';
import BookForm from './components/BookForm';
import Home from './components/Home';
import Journal from './components/Journal';
import AddModal from './components/AddModal';
import Navigation from './components/Navigation';
// import CreateAccount from './components/CreateAccount';

// import Background from './components/Background';
// import Journal from './components/Journal';

// import Search from './components/BookForm';
// import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Logout from './components/Logout';
import DeleteModal from './components/DeleteModal';
// import BookAccordion from './components/BookAccordian';



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
				<Navigation></Navigation>

				{/* <BookAccordion></BookAccordion> */}
				{/* <AddModal></AddModal>
				<DeleteModal></DeleteModal> */}
				{/* <Journal></Journal> */}
				{/* <About></About> */}
				{/* <Login doLogin={doLogin} /> */}
				{/* <Logout doLogout={doLogout} /> */}
				{/* <BookForm /> */}
			</div>
		</Router >
	);
};

export default App;
