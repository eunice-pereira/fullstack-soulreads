import React from 'react';
import axios from 'axios';

const Logout = (props) => {
	const processLogout = async (e) => {
		e.preventDefault();
		const resp = await axios.post('/api/user/logout');
		console.log(resp.data);
		props.doLogout();
	};

	return (
		<button onClick={processLogout} align="center">
			Logout
		</button>
	);
};

export default Logout;
