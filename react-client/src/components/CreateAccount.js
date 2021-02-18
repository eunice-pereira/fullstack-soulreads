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
	const [showForm, setShowForm] = useState(false);

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

		// if response is successful, sending user to general home page
		// if (resp.status === 200) {
		// 	history.push('/home');
		// }
	};

	return (
		<div className="create-acct-form">
			<button
				onClick={() => {
					setShowForm(true);
				}}
			>
				Become a Member
			</button>
			{showForm && (
				<form align="center" method="POST" onSubmit={processNewMemeber}>
					<div className="form-group">
						<input
							autoFocus
							placeholder="First Name"
							name="firstname"
							type="text"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<input
							placeholder="Last Name"
							name="lastname"
							type="text"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<input
							placeholder="Email"
							name="email"
							type="text"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<input
							placeholder="Username"
							name="username"
							type="text"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<input
							placeholder="Password"
							name="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create Account" />
					</div>
				</form>
			)}
		</div>
	);
};
// need to add redirect to login page
export default CreateAccount;
