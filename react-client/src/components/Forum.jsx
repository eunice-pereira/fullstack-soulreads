import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import LibraryResults from './LibraryResults';

// protected route - link should only appear once logged in

const Forum = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const newPost = async (description, book) => {
		console.log(book);
		let post = {
			description,
			book,
		};
		const resp = await axios.post('/api/forum/newpost', post);
		console.log(resp.data);
	};
	const searchLibrary = async (searchQuery) => {
		const resp = await axios.get(`/api/forum/newpost?search=${searchQuery}`);
		console.log(resp.data.libraryTitle);
		setSearchResult([...searchResult, resp.data.libraryTitle]);
	};

	return (
		<div className="form-post-container">
			<h1>SoulChat</h1>
			<p>
				Welcome to SoulChat! Share your favorite books from your personal
				library along with your thoughts, insights, and learning moments.
			</p>
			<br></br>
			<MDBCol md="6">
				<label>
					Share a book from your library to start a discussion with other
					SoulReaders!
					<p>Search by author or title</p>
					<MDBIcon icon="search" />
					<input
						className="form-control form-control-sm ml-3 w-75"
						type="text"
						aria-label="Search"
						onChange={(e) => {
							setSearchQuery(e.target.value);
						}}
					/>
					<MDBBtn
						rounded
						size="md"
						className="btn"
						onClick={(e) => searchLibrary(searchQuery)}
					>
						Search Library
					</MDBBtn>
					<LibraryResults searchResult={searchResult} newPost={newPost} />
				</label>
			</MDBCol>
		</div>
	);
};

export default Forum;
