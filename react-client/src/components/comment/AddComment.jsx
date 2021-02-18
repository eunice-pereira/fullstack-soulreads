import React, { useState } from 'react';

import axios from 'axios';

import { Input, InputAdornment } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

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
					<Input
						autoFocus
						type="textarea"
						name="comment"
						value={comment}
						rows="3"
						outline
						onChange={(e) => setComment(e.target.value)}
					/>
					<input className="post-comment" type="submit" value="Post Comment" />
				</form>
			)}
		</div>
	);
};

export default AddComment;
