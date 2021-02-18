import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { MDBInput } from 'mdbreact';
import Soulchat from './Soulchat';

const LibraryResults = ({ searchResult, newPost, refresh }) => {
	const history = useHistory();
	console.log(searchResult);
	const [book, setBook] = useState(null);

	const [description, setDescription] = useState('');
	return (
		<div className="library-results">
			<ul>
				{searchResult.length !== 0 &&
					searchResult[0].map((book) => (
						<li>
							<div key={book.id}>
								<h3>{book.title}</h3>
								<h4>{book.author}</h4>
								<button
									const
									onClick={(e) => {
										console.log(`book selected ${book.id}`);
										setBook(book.id);
									}}
								>
									Select
								</button>
							</div>
						</li>
					))}
			</ul>
			<form
				align="center"
				method="POST"
				onSubmit={(e) => {
					e.preventDefault();
					newPost(description, book);
				}}
			>
				<MDBInput
					type="textarea"
					name="description"
					onChange={(e) => setDescription(e.target.value)}
					label="Thoughts..."
					rows="3"
					outline
				/>

				<input className="btn" type="submit" value="Post" />
			</form>
			<Soulchat refresh={refresh} />
		</div>
	);
};

export default LibraryResults;
