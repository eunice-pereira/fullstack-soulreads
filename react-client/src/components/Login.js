//standard imports
import React from 'react';
import axios from 'axios';

//state imports
import { useState } from 'react';

// import logo from '../images/zen.png';
import flower from '../components/images/zen.png'


//material ui import
import { Input } from '@material-ui/core';
import logo from '../components/images/zen.png';
import { useHistory } from "react-router-dom";



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
		<div className="main">
			<div className="welcome-container">
				<div className="soul-flower">
					<div className="welcome"><h2 >Soul</h2></div>
					<div className="flower"><img src={flower} width="225px" /></div>
				</div>
				<div className="welcome2"><h1 >Reads</h1></div>
			</div>
			<div class="separate">
				<div className="login-form">
					<i class="fas fa-exclamation-circle trailing"></i>
					<form
						className="flex"
						align="right"
						method="POST"
						onSubmit={processLogin}
					>
						<div className="form-group">
							<label for="username" align="left">
								Username:
								<Input placeholder="Username"
									autoFocus
									name="username"
									type="text"
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>
						</div>

						<div className="form-group">
							<label for="password" align="left">
								Password
								<Input placeholder="Password"
									name="password"
									type="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
						</div>
						<div>
							<input className="add-button" type="submit" ></input>
							{/* <input type="submit" className="login-button" value="Login" /> */}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

// need to add useHistory() to send user to their member profile


export default Login;

