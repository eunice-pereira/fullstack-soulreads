// import React from "react";
import { MDBAnimation } from "mdbreact";

// const Animation = () => {
// 	return (
// 		<MDBAnimation type="fadeInBig"   >
// 			<h1 class="display-1">Soul Reads</h1>
// 			{/* <h1 class="display-1">Reads</h1> */}
// 		</MDBAnimation>
// 	);
// };

// export default Animation;

//standard imports
import React from 'react';
import axios from 'axios';

//material database imports
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Fragment } from "react";

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
		// <MDBContainer>
		<MDBRow>
			<MDBCol md="11" >

				<div className="login-form">
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
						<MDBBtn rounded outline color="unique">
							<MDBInput type="submit" className="login-button" />
						</MDBBtn>
					</form>
				</div>

			</MDBCol>
		</MDBRow>

		// </MDBContainer >
	);
};

// need to add useHistory() to send user to their member profile


export default Login;











// import React from 'react';
// import {
// 	MDBContainer,
// 	MDBRow,
// 	MDBCol,
// 	MDBBtn,
// 	MDBView,
// 	MDBMask,
// } from 'mdbreact';

// const Home = (props) => {
// 	return (
// 		<div>
// 			<MDBView hover zoom>
// 				<img
// 					src="https://babbletop.com/wp-content/uploads/2017/08/organize-bookshelf-1280x720.jpg"
// 					className="background-image"
// 					alt=""
// 				/>
// 				<MDBMask className="flex">
// 					<h1>SoulReads</h1>
// 				</MDBMask>
// 			</MDBView>

// 			<MDBContainer>
// 				<MDBRow>
// 					<MDBCol md="3">
// 						<div class="position-absolute top-0 end-0">
// 							<form>
// 								<p className="h4 text-center mb-4">Sign in</p>
// 								<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
// 									Username
// 								</label>
// 								<input
// 									type="email"
// 									id="defaultFormLoginEmailEx"
// 									className="form-control"
// 								/>
// 								<br />
// 								<label
// 									htmlFor="defaultFormLoginPasswordEx"
// 									className="grey-text"
// 								>
// 									Password
// 								</label>
// 								<input
// 									type="password"
// 									id="defaultFormLoginPasswordEx"
// 									className="form-control"
// 								/>
// 								<div className="text-center mt-4">
// 									<MDBBtn color="indigo" type="submit">
// 										Login{' '}
// 									</MDBBtn>
// 								</div>
// 								<div className="text-center mt-4">
// 									<MDBBtn color="indigo" type="submit">
// 										Create Account
// 									</MDBBtn>
// 								</div>
// 							</form>
// 						</div>
// 					</MDBCol>
// 				</MDBRow>
// 			</MDBContainer>
// 		</div>
// 	);
// };

// export default Home;
