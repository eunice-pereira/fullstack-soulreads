import './App.css';
import React, { useEffect, useState } from 'react';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import BookForm from './UI/BookForm';
import Home from './UI/Home';

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
				<CreateAccount />
				<Login />
				<BookForm />
			</div>
		</Router>
	);
};

export default App;
