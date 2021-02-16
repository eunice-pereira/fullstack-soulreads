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
		<MDBContainer>
			<Home></Home>
			<MDBRow>
				<MDBCol md="11" >

					<div className="login-form">
						<i class="fas fa-exclamation-circle trailing"></i>
						<form className="flex" align="right" method="POST" onSubmit={processLogin}>
							{/* <h1>Sign In</h1> */}
							{/* {message && <h2>{message}</h2>} */}

							<div className="form-group">
								<label for="username" align="left">
									Username:
							<MDBInput
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
							<MDBInput
										name="password"
										type="password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</label>
							</div>
							{/* <MDBBtn rounded outline color="unique">
							<MDBInput type="submit" className="login-button" />
						</MDBBtn> */}

						</form>
					</div>

				</MDBCol>
			</MDBRow>

		</MDBContainer >
	);
};

// need to add useHistory() to send user to their member profile


export default Login;

