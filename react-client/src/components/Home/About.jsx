import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

const About = () => {
	return (
		<MDBCard className="my-5 px-1 pb-5 text-center">
			<img
				tag="img"
				src="https://ciclovivo.com.br/wp-content/uploads/2018/02/iStock-498313087.jpg"
				className="img-fluid"
				alt="color background"
			/>

			<MDBCardBody>
				<h2 className="h1-responsive font-weight-bold my-25" >
					Creators of SoulReads
          	 	</h2>
				<p className="purple-text w-responsive mx-auto mb-5">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
					error amet numquam iure provident voluptate esse quasi, veritatis
					totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
				<MDBRow>
					<MDBCol md="4" className="mb-md-0 mb-5">
						<img
							tag="img"
							src="https://avatars.githubusercontent.com/u/72634999?s=400&u=f04d76b801cc9447f808335ad54ff6a245fe119a&v=4"
							className="rounded z-depth-1-half img-fluid"
							alt="Eunice"
						/>
						<h4 className="font-weight-bold dark-grey-text my-4" >
							Eunice
              			</h4>
						<h6 className="text-uppercase purple-text mb-3">Full-Stack Developer</h6>
						<MDBBtn
							tag="a"
							floating size="sm"
							className="mx-1 mb-0 btn-github"
							href="https://www.linkedin.com/in/eunice-pereira-10/"

						>
							<MDBIcon fab icon="linkedin-in" />
						</MDBBtn>
						<MDBBtn tag="a" color='purple' floating size="sm" className="mx-1 mb-0 btn-tw" href="https://github.com/eunice-pereira">
							<MDBIcon fab icon="github" />
						</MDBBtn>
					</MDBCol>

					<MDBCol md="4" className="mb-md-0 mb-5">
						<img
							tag="img"
							src="https://avatars.githubusercontent.com/u/22776579?s=460&u=a4e4a219chttps://avatars.githubusercontent.com/u/72634999?s=400&u=f04d76b801cc9447f808335ad54ff6a245fe119a&v=463df44d66b73253939831096c5f5abb&v=4"
							className="rounded z-depth-1-half img-fluid"
							alt="Sarina"
						/>
						<h4 className="font-weight-bold dark-grey-text my-4">Sarina</h4>
						<h6 className="text-uppercase purple-text mb-3">
							Full-Stack Developer
              			</h6>
						<MDBBtn
							tag="a"
							floating size="sm"
							className="mx-1 mb-0 btn-github"
							href="https://www.linkedin.com/in/sarina-l-b5760b13a/"
						>
							<MDBIcon fab icon="linkedin-in" />
						</MDBBtn>

						<MDBBtn tag="a" color='purple' floating size="sm" className="mx-1 mb-0 btn-git" href="https://github.com/slyons777">
							<MDBIcon fab icon="github" />
						</MDBBtn>
					</MDBCol>

					<MDBCol md="4" className="mb-md-0 mb-5">
						<img
							tag="img"
							src="https://avatars.githubusercontent.com/u/72419173?s=400&u=bd8c5975d53979e3b268cceeb5d997260108763c&v=4"
							className="rounded z-depth-1-half img-fluid"
							alt="Sarina"
						/>
						<h4 className="font-weight-bold dark-grey-text my-4">
							Mikeya
          				</h4>
						<h6 className="text-uppercase purple-text mb-3">Full-Stack Developer</h6>
						<MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li" href="https://www.linkedin.com/in/mikeya-jordan-francis-0420a33b/">
							<MDBIcon fab icon="linkedin-in" />
						</MDBBtn>
						<MDBBtn tag="a" color='purple' floating size="sm" className="mx-1 mb-0 btn-tw" href="https://github.com/callmekeyz">
							<MDBIcon fab icon="github" />
						</MDBBtn>
					</MDBCol>
				</MDBRow>
			</MDBCardBody>
		</MDBCard >
	);
}

export default About;