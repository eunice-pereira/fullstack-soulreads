import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Login = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const processLogin = async (e) => {
		e.preventDefault();
		let user = {
			username,
			password,
		};
		try {
			const resp = await axios.post('/api/user/login', user);
			console.log(resp.data);

			// Sending Login status to App
			props.doLogin();
			setMessage('');
		} catch (e) {
			setMessage('Invalid username and password.');
		}
	};

	return (
		<div className="login-form">
			<form align="center" method="POST" onSubmit={processLogin}>
				<h1>Login!</h1>
				{message && <h2>{message}</h2>}
				<div className="form-group">
					<label for="username">
						Username:
						<input
							autoFocus
							name="username"
							type="text"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label for="password">
						Password
						<input
							name="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<input type="submit" className="login-button" value="Login" />
			</form>
		</div>
	);
};

// need to add useHistory() to send user to their member profile

export default Login;
