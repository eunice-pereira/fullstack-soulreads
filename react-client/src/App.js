import './App.css';
import React, { useEffect, useState } from 'react';

import Home from './UI/Home';
// import Search from "./Search";
// import Wishlist from './components/Wishlist';

import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';



const App = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		axios.get('/api').then((response) => {
			console.log(response.data);
			setData(response.data);
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Home data={data} />
			</div>
		</Router>
	);
};

export default App;
