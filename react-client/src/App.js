import './App.css';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import BookForm from './components/BookForm';
import Home from './components/Home';
import Search from './components/BookForm';
=======
import CreateAccount from './components/CreateAccount';
import BookForm from './UI/BookForm';
import Home from './UI/Home';
>>>>>>> main

// import Search from "./Search";
// import Wishlist from './components/Wishlist';
// import Test from './components/Test';

import { BrowserRouter as Router } from 'react-router-dom';

<<<<<<< HEAD
import axios from 'axios';


// console.log(process.env.REACT_APP_GOOGLE_API_KEY)



const App = () => {
	const [data, setData] = useState({});
	const [books, setBooks] = useState({});

	async function getBook() {

		const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:', {
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

=======
const App = () => {
	const [data, setData] = useState({});
>>>>>>> main

	return (
		<Router>
			<div className="App">
<<<<<<< HEAD
				<Home data={data}></Home>
=======
				<Home data={data} />
				<CreateAccount />
				<BookForm />
>>>>>>> main
			</div>
		</Router >
	);
};

<<<<<<< HEAD

=======
>>>>>>> main
export default App;
