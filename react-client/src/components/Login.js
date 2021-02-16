//standard imports
import React from 'react';
import axios from 'axios';

//material database imports
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBJumbotron } from 'mdbreact';
import { Fragment } from "react";
//import file from components
import Home from "./Home";
//state imports
import { useState } from 'react';

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

		<div class="main">
			<h2 class="welcome">Soul</h2>

			<h1 class="welcome2">Reads</h1>
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
								<input
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
								<input
									name="password"
									type="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
						</div>
						<div>
							<input type="submit" className="login-button" value="Login" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

// need to add useHistory() to send user to their member profile


export default Login;

