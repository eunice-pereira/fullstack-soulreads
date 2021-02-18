import React from 'react';
import { useState, useHistory } from 'react';
import axios from 'axios';

const CreateAccount = () => {
	// let history = useHistory();

	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const processNewMemeber = async (e) => {
		e.preventDefault();
		let newMember = {
			firstname,
			lastname,
			email,
			username,
			password,
		};
		const resp = await axios.post('/api/user/new', newMember);
		console.log(resp.data);
	};

	return (
		<div className="create-acct-form">
			<form align="center" method="POST" onSubmit={processNewMemeber}>
				<h2>Become a Member!</h2>

				<div className="form-group">
					<label>
						First Name:
						<input
							autoFocus
							name="firstname"
							type="text"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label>
						Last Name:
						<input
							name="lastname"
							type="text"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label>
						Email:
						<input
							name="email"
							type="text"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label>
						Username:
						<input
							name="username"
							type="text"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label>
						Password:
						<input
							name="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<div className="form-group">
					<input type="submit" value="Create Account" />
				</div>
			</form>
		</div>
	);
};

// // need to add redirect to login page
export default CreateAccount;
