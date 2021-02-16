import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import LibraryResults from '../LibraryResults';
import Soulchat from './Soulchat';

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
		console.log(resp.data.libraryItem);
		setSearchResult([...searchResult, resp.data.libraryItem]);
	};

	return (
		<div className="form-post-container">
			<h1>SoulChat</h1>
			<div className="soulchat-intro">
				<p>
					SoulChat is SoulReads' interactive member forum, where you can share
					your favorite books from your personal library. Add your thoughts,
					insightful moments to start the conversation.
				</p>
				<p>
					SoulReaders with like interests can comment on your posts to get the
					disucssion going. Start a SoulChat below!
				</p>
			</div>
			<br></br>
			<div className="soulchat-post">
				<MDBCol md="6">
					<label>
						Share a book from your library to start a discussion with other
						SoulReaders!
						<p>
							{' '}
							<MDBIcon icon="search" />
							Search your personal library:
						</p>
						<input
							className="form-control form-control-sm ml-3 w-75"
							type="text"
							aria-label="Search"
							placeholder="Title or Author"
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
			<Soulchat />
		</div>
	);
};

export default Forum;
