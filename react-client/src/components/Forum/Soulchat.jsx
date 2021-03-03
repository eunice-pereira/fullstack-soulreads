import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import AddComment from './AddComment';

const Soulchat = (props) => {
	const [posts, setPosts] = useState([]);

	async function getPosts() {
		const resp = await axios.get('/api/forum/soulchat');
		console.log(resp.data);
		setPosts(resp.data.posts);
	}
	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		getPosts();
	}, [props.refresh]);

	return (
		<div className="soulchat-container">
			{/* <button onClick={getForums}>Get Posts</button> */}
			<div className="soulchat-posts">
				<ul>
					{posts.length !== 0 &&
						posts.map((post) => (
							<li>
								<div key={post.id}>
									<h4>{post.title}</h4>
									<h5>{post.author}</h5>
									<h5>{post.status}</h5>
									<h6>{post.description}</h6>
									<button
										onClick={async (e) => {
											let postId = post.id;
											const resp = await axios
												.post(`/api/forum/${postId}/delete`, postId)
												.then(() => getPosts());
										}}
									>
										Delete Post
									</button>
									{/* <button>Edit Post</button> */}
									<AddComment post={post} />
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Soulchat;
