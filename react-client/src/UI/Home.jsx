import React from 'react';

const Home = (props) => {
	return (
		<div>
			<h1>Testing: Hello from Express! </h1>
			<p>{props.data.status}</p>
		</div>
	);
};

export default Home;

