import React from 'react';

const EditPost = ({ posts }) => {
	const [editing, setEditing] = useState(false);
	const [editDesc, setEditDesc] = useState('');

	// useEffect(() => {
	// 	setEditTitle(viewbook.title);
	// 	setEditAuthor(viewbook.author);
	// 	setEditCategory(viewbook.category);
	// 	setEditStatus(viewbook.status);
	// }, [viewbook]);

	if (editing) {
		return (
			<div>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						const resp = await axios.put(`/api/forum/${posts.id}/edit`, {
							description: editDesc,
						});
					}}
				>
					<div>
						<input
							value={editDesc}
							onChange={(e) => setEditDesc(e.target.value)}
						/>
					</div>

					{/* 
					<label>
						Author
						<div>
							<input
								value={editAuthor}
								onChange={(e) => setEditAuthor(e.target.value)}
							/>
						</div>
					</label>

					<label>
						Category
						<div>
							<input
								value={editCategory}
								onChange={(e) => setEditCategory(e.target.value)}
							/>
						</div>
					</label>

					<div>
						<select
							value={editStatus}
							onChange={(e) => setEditStatus(e.target.value)}
						>
							<option>Status</option>
							<option value="Wishlist">Wishlist</option>
							<option value="Currently reading">Currently Reading</option>
							<option value="Purchased">Purchased</option>
							<option value="Completed">Completed</option>
						</select>
					</div> */}
					<input className="btn" type="submit" value="Update" />
				</form>
				<button className="btn" onClick={() => setEditing(false)}>
					Back to Post
				</button>
			</div>
		);
	} else {
		return (
			<div className="view-post">
				<p>{posts.description}</p>
				<button className="btn" onClick={() => setEditing(true)}>
					Edit
				</button>
			</div>
		);
	}
};

export default EditPost;
