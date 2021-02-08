import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const processLogin = async (e) => {
		e.preventDefault();
		let user = {
			username,
			password,
		};
		const resp = await axios.post('/api/login', user);
		console.log(resp.data);
	};

	return (
		<div className="login-form">
			<form align="center" method="POST" onSubmit={processLogin}>
				<h1>Login!</h1>
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
					<input type="submit" className="login-button" value="Login" />
				</div>
			</form>
		</div>
	);
};

// need to add useHistory() to send user to their member profile

export default Login;
