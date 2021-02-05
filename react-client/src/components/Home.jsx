import React from 'react';
import Button from '@material-ui/core/Button';


const Home = (props) => {
	return (
		<div>
			<h1>Testing: Hello from Express! </h1>
			<p>{props.data.status}</p>
			<Button size="large" color="primary" variant="contained">
				Click Me
			</Button>
		</div>

	);
};

export default Home;

