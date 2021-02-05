import React from 'react';

const Test = () => {
	return (
		<>
			<form align="center" method="POST">
				<h2>Become a Member!</h2>

				<div className="form-group">
					<label>
						First Name:
						<input
							name="firstname"
							type="text"
							placeholder="Enter first name"
							autofocus
						/>
					</label>
				</div>

				<div className="form-group">
					<label>
						Last Name:
						<input name="lastname" type="text" />
					</label>
				</div>

				<div className="form-group">
					<label>
						Email:
						<input name="email" type="text" />
					</label>
				</div>

				<div className="form-group">
					<label>
						Username:
						<input name="username" type="text" />
					</label>
				</div>

				<div className="form-group">
					<label>
						Password:
						<input name="password" type="password" />
					</label>
				</div>

				<div className="form-group">
					<input type="submit" value="Submit" />
					<p>
						<a href="/">Home</a>
					</p>
				</div>
			</form>
		</>
	);
};

export default Test;
