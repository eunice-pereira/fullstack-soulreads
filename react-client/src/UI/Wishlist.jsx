import React from 'react';

function Wishlist(props) {
	return (
		<ul>
			{
				props.books.map(b => (
					<li key={b.id}
						onClick={(e) => {
							console.log(b.name);
							props.chooseBook(b);
						}}
					>
						{b.name}: {b.author} - {b.year}
					</li>
				))
			}
		</ul>
	);
}

export default Wishlist;