import './App.css';
import React, { useEffect, useState } from 'react';
import BookForm from './UI/BookForm';

import Home from './UI/Home';

// import Search from "./Search";
// import Wishlist from './components/Wishlist';

import Test from './components/Test';


import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';
import Search from './UI/BookForm';

// console.log(process.env.REACT_APP_GOOGLE_API_KEY)



const App = () => {
	const [data, setData] = useState({});

	const [books, setBooks] = useState({});
	const [title, setTitle] = useState({});
	async function getBook() {
	
		const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms', {
			headers: {
				Accept: 'application/json'
			}
		});

		const data = await response.json();
		setBooks(data.items);
		console.log(data.items)

		
	}

	
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
			<button onClick={getBook}>Get Book</button>
			<BookForm></BookForm>
			<div className="App">
				<Home data={data} />
				<Test books={books} />
			</div>
		</Router>
	);
};




export default App;
