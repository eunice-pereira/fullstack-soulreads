import React, { useState } from 'react';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBView,
	MDBIcon,
	MDBInput,
} from 'mdbreact';

const Journal = () => {
	const [showEntry, setShowEntry] = useState(false);

	return (
		<MDBRow>
			<MDBCol md="4">
				<MDBCard wide cascade>
					<MDBView cascade>
						<MDBCardImage
							hover
							overlay="white-slight"
							className="card-img-top"
							src="https://images-na.ssl-images-amazon.com/images/I/81vdSLkE5YL.jpg"
							alt="You are the Universe"
						/>
					</MDBView>

					<MDBCardBody cascade className="text-center">
						<MDBCardTitle className="card-title">
							{/* <strong>{$bookTitle}</strong> */}
						</MDBCardTitle>

						<p className="font-weight-bold blue-text">Thought:</p>

						<MDBCardText>
							Sed ut perspiciatis unde omnis iste natus sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam.{' '}
						</MDBCardText>

						<MDBCol md="12" className="d-flex justify-content-center">
							<a href="!#" className="px-2 fa-lg li-ic">
								<MDBIcon fab icon="linkedin-in"></MDBIcon>
							</a>

							<a href="!#" className="px-2 fa-lg tw-ic">
								<MDBIcon fab icon="twitter"></MDBIcon>
							</a>

							<a href="!#" className="px-2 fa-lg fb-ic">
								<MDBIcon fab icon="facebook-f"></MDBIcon>
							</a>
						</MDBCol>
					</MDBCardBody>
				</MDBCard>
			</MDBCol>

			<MDBCol md="4">
				<MDBCard narrow>
					<MDBView cascade>
						<MDBCardImage
							hover
							overlay="white-slight"
							className="card-img-top"
							src="https://m.media-amazon.com/images/I/31vLBpmOmoL.jpg"
							alt="This Thing Called You"
						/>
					</MDBView>

					<MDBCardBody>
						<MDBCardTitle className="font-weight-bold">
							{/* <strong>{$bookTitle}</strong> */}
						</MDBCardTitle>
						<MDBBtn color="unique">Add Journal Entry</MDBBtn>
						{/* <form method="POST" onSubmit={}> */}
						<MDBCardText>
							Sed ut perspiciatis unde omnis iste natus sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam.
						</MDBCardText>
						{/* </form> */}
					</MDBCardBody>
				</MDBCard>
			</MDBCol>

			<MDBCol md="4">
				<MDBCard>
					<MDBCardImage
						hover
						overlay="white-light"
						className="card-img-top"
						src="https://images-na.ssl-images-amazon.com/images/I/81vdSLkE5YL.jpg"
						alt="Book"
					/>

					<MDBCardBody cascade className="text-center">
						<MDBCardTitle className="card-title">
							<strong></strong>
						</MDBCardTitle>

						<p className="font-weight-bold blue-text"></p>

						<MDBCardText>
							Sed ut perspiciatis unde omnis iste natus sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam.{' '}
						</MDBCardText>

						<MDBCol md="12" className="d-flex justify-content-center">
							<MDBBtn rounded floating color="fb">
								<MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
							</MDBBtn>

							<MDBBtn rounded floating color="tw">
								<MDBIcon size="lg" fab icon="twitter"></MDBIcon>
							</MDBBtn>

							<MDBBtn rounded floating color="dribbble">
								<MDBIcon size="lg" fab icon="dribbble"></MDBIcon>
							</MDBBtn>
						</MDBCol>
					</MDBCardBody>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	);
};

export default Journal;
