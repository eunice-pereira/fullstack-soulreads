import './App.css';
import React, { useEffect, useState } from 'react';

import Home from './UI/Home';

// import Search from "./Search";
// import Wishlist from './components/Wishlist';

import Test from './components/Test';


import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';



const App = () => {
	const [data, setData] = useState({});
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get('/api').then((response) => {
			console.log(response.data);
			setData(response.data);
		});
	}, []);
	useEffect(() => {
		axios.get('/api/books').then((response) => {
			console.log('----fetching books data-----');
			console.log(response.data);
			setBooks(response.data);
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Home data={data} />
				<Test books={books} />
			</div>
		</Router>
	);
};

export default App;
