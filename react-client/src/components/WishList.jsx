import React from 'react';

function WishList(props) {
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

export default WishList;