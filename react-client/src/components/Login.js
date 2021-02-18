//standard imports
import React from 'react';
import axios from 'axios';

//state imports
import { useState } from 'react';

// import logo from '../images/zen.png';
import flower from '../components/images/zen.png'



//material ui import
import { Input } from '@material-ui/core';
import { useHistory } from "react-router-dom";



const Login = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const history = useHistory();

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
			history.push('/Library');
			setMessage('');
		} catch (e) {
			setMessage('Invalid username and password.');
		}
	};
	return (
		<div className="main">
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

								<Input className="password" placeholder="Password"
									name="password"
									type="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
							<div>
								<input className="add-button" type="submit" ></input>
								{/* <input type="submit" className="login-button" value="Login" /> */}
							</div>
							<br />
						</div>
						<div className="welcome-container">
							<div className="soul-flower">
								<div className="welcome"><h1 >SoulReads</h1></div>
								<div className="flower-container">
									<img src={flower} width="300px" />
								</div>
							</div>

						</div>



					</form>
				</div>
			</div>
		</div>
	);
};

// need to add useHistory() to send user to their member profile


export default Login;

