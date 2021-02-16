import React, { useState, useEffect } from 'react';
import Login from './Login'
import AddBook from './Books/AddBook';
import BookForm from './Books/BookForm';
import Journal from './Journal';
import BookTable from './BookTable';
import Navigation from './Navigation';
// import BookTable from './BookTable';
import { MDBNavbar, MDBRow, MDBIcon } from 'mdbreact';
import ViewBook from './Books/ViewBook';
// import BookTable from './BookTable';
import Forum from './Forum';
import { LibraryAdd } from '@material-ui/icons';


const Member = ({ sessionId }) => {
	const { books } = {
		'message': 'showing book list',
		'books': [
			{
				'id': 2,
				'title': 'Science and the Akashic Field',
				'author': 'Ervin Laszlo',
				'category': 'science',
				'isbn': '',
				'status': 'Completed',
				'content': null,
				'memberId': 2,
				'createdAt': '2021 - 02 - 11T20: 58: 46.671Z',
				'updatedAt': '2021 - 02 - 11T20: 58: 46.671Z'
			},
			{
				'id': 4,
				'title': 'The Power of Now',
				'author': 'Eckhart Tolle',
				'category': 'Body, Mind & Spirit',
				'isbn': null,
				'status': null,
				'content': null,
				'memberId': 2,
				'createdAt': '2021 - 02 - 11T21: 11: 47.213Z',
				'updatedAt': '2021 - 02 - 11T21: 11: 47.213Z'
			},
			{
				'id': 5,
				'title': 'This Thing Called You ',
				'author': 'Ernest Holmes',
				'category': 'FIRE',
				'isbn': '',
				'status': 'Completed',
				'content': null,
				'memberId': 2,
				'createdAt': '2021 - 02 - 11T23: 08: 13.731Z',
				'updatedAt': '2021 - 02 - 11T23: 08: 13.731Z'
			}
		]
	}

	console.log(sessionId, 'member component');
	return (
		<div>
			<Login></Login>
			<Navigation></Navigation>
			<h1 class="center-block">Member Profile</h1>
			<a class="btn-floating col-md-4 center-block "><i class="fas fa-book" ></i></a>
			<a class="btn-floating col-md-4 "><i class="fas fa-user"></i></a>
			<a class="btn-floating col-md-4 "><i class="fas fa-heart"></i></a>
			{/* <Journal></Journal> */}

			{/* <BookTable books={books}> */}
			{/* </BookTable> */}
			{/* <MDBNavbar> */}
			{/* <AddBook />
				<BookForm />
				<BookTable /> */}
			{/* </MDBNavbar> */}
			{/* <AddBook />
			<BookForm /> */}
			{/* <BookTable /> */}
			{/* <Forum /> */}
		</div>
	);
};

export default Member;
