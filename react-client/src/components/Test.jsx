import React from 'react';

const Test = ({ books }) => {
	return (
		<div>
			<h2>Testing Book Data from Express</h2>
			<p>book data:</p>
			{books.map((book) => (
				<ul key={book.id}>
					<li>{book.title}</li>
					<li>{book.author}</li>
					<li>{book.status}</li>
				</ul>
			))}
		</div>
	);
};

export default Test;
