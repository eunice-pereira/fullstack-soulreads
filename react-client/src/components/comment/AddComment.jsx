import React, { useState } from 'react';
import { MDBInput } from 'mdbreact';
import axios from 'axios';

const AddComment = ({ post }) => {
	const [comment, setComment] = useState('');
	const [showForm, setShowForm] = useState(false);

	async function newComment(forumId) {
		const content = {
			comment,
			forumId,
		};
		const resp = await axios.post('/api/comment/add/', content);
		console.log(resp.data);
	}

	return (
		<div className="comment-container">
			<button
				onClick={() => {
					setShowForm(true);
				}}
			>
				Add Comment
			</button>
			{showForm && (
				<form
					method="POST"
					onSubmit={(e) => {
						e.preventDefault();
						newComment(post.id);
					}}
				>
					<MDBInput
						autoFocus
						type="textarea"
						name="comment"
						value={comment}
						rows="3"
						outline
						onChange={(e) => setComment(e.target.value)}
					/>
					<input type="submit" value="Post Comment" />
				</form>
			)}
		</div>
	);
};

export default AddComment;
