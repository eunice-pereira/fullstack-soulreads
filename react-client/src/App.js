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

// import Search from "./Search";
// import Wishlist from './components/Wishlist';
// import Test from './components/Test';

import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
	const [data, setData] = useState({});

	return (
		<Router>
			<div className="App">
				<Home data={data} />
				<Journal></Journal>



				{/* <CreateAccount /> */}
				{/* <BookForm /> */}

			</div>
		</Router >
	);
};

export default App;
