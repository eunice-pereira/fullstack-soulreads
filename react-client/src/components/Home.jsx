import React from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBView,
	MDBMask,
} from 'mdbreact';

const Home = (props) => {
	return (
		<div>
			<MDBView hover zoom>
				<img
					src="https://babbletop.com/wp-content/uploads/2017/08/organize-bookshelf-1280x720.jpg"
					className="background-image"
					alt=""
				/>
				<MDBMask className="flex">
					<h1>SoulReads</h1>
				</MDBMask>
			</MDBView>

			<MDBContainer>
				<MDBRow>
					<MDBCol md="3">
						<div class="position-absolute top-0 end-0">
							<form>
								<p className="h4 text-center mb-4">Sign in</p>
								<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
									Username
								</label>
								<input
									type="email"
									id="defaultFormLoginEmailEx"
									className="form-control"
								/>
								<br />
								<label
									htmlFor="defaultFormLoginPasswordEx"
									className="grey-text"
								>
									Password
								</label>
								<input
									type="password"
									id="defaultFormLoginPasswordEx"
									className="form-control"
								/>
								<div className="text-center mt-4">
									<MDBBtn color="indigo" type="submit">
										Login{' '}
									</MDBBtn>
								</div>
								<div className="text-center mt-4">
									<MDBBtn color="indigo" type="submit">
										Create Account
									</MDBBtn>
								</div>
							</form>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};

export default Home;
