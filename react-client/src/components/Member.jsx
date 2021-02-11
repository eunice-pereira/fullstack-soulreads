import React, { useState, useEffect } from 'react';
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import Journal from './Journal';
import BookTable from './Books/BookTable';
import { MDBNavbar, MDBRow, MDBIcon } from 'mdbreact';

const Member = ({ sessionId }) => {
	console.log(sessionId, 'member component');
	return (
		<div>
			<h1>Member Profile</h1>
			<MDBNavbar>
				<MDBRow className="masonry-with-columns-4">
					<div>
						<MDBIcon icon="book-open" />
					</div>
					<div>
						2
        			</div>
					<div>
						3
        			</div>
					<div>
						4
        			</div>
				</MDBRow>
				{/* <AddBook />
				<BookForm />
				<BookTable /> */}
			</MDBNavbar>
		</div>
	);
};

export default Member;
