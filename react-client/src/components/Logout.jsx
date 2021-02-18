import React from 'react';
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Logout = (props) => {
	const processLogout = async (e) => {
		e.preventDefault();
		const resp = await axios.post('/api/user/logout');
		console.log(resp.data);
		props.doLogout();
	};

	return (
		<div className="logout-button">
			<button className="logout-nav" onClick={processLogout}>
				<ExitToAppIcon fontSize="large"></ExitToAppIcon>
				<div className="sign-out">Sign Out</div>
			</button>
		</div>
	);
};

export default Logout;
