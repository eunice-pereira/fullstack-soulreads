import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
	const [content, setContent] = useState('');
	const [entries, setEntries] = useState([]);

	async function newJournal(value) {
		const entry = {
			content,
			value,
		};
		const resp = await axios.post('/api/journal/new/', entry);
		console.log(resp.data);
	}
	async function getEntries() {
		const resp = await axios.get('/api/journal/entries');
		console.log(resp.data);
		setEntries(resp.data.entries);
	}
	useEffect(() => {
		getEntries();
	}, []);

	return (
		<MDBRow className="journal-card">
			<MDBCol md="6">
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
						<MDBBtn
							color="unique"
							onClick={() => {
								setShowEntry(true);
							}}
						>
							Add Journal Entry
						</MDBBtn>

						{showEntry && (
							<form
								method="POST"
								onSubmit={(e) => {
									e.preventDefault();
									newJournal().then(() => getEntries());
								}}
							>
								<MDBInput
									type="textarea"
									rows="5"
									onChange={(e) => setContent(e.target.value)}
								/>
								<MDBBtn color="unique" type="submit">
									Save
								</MDBBtn>
							</form>
						)}
						<br></br>
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
			<MDBCol md="6" className="journal-entry">
				{entries.length !== 0 &&
					entries.map((entry) => (
						<ul>
							<div>
								<MDBCard narrow>
									<MDBView cascade>
										<MDBCardBody>
											<h6>{entry.content}</h6>
											<button
												onClick={async (e) => {
													let journalId = entry.id;
													const resp = await axios
														.post(`/api/journal/${journalId}/delete`, journalId)
														.then(() => getEntries());
												}}
											>
												Delete
											</button>
										</MDBCardBody>
									</MDBView>
								</MDBCard>
							</div>
						</ul>
					))}
			</MDBCol>
		</MDBRow>
	);
};

export default Journal;
