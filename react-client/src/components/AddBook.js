import React, { useState } from 'react';

const Search = (props) => {
	// const [searchValue, setSearchValue] = useState("");

	// const handleSearchInputChanges = (e) => {
	//     setSearchValue(e.target.value);
	// };

	// const resetInputField = () => {
	//     setSearchValue("");
	// };

	// const callSearchFunction = (e) => {
	//     e.preventDefault();
	//     props.search(searchValue);
	//     resetInputField();
	// };

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [category, setCategory] = useState('');
	const [isbn, setIsbn] = useState('');
	const [status, setStatus] = useState('');

	const addBook = async (e) => {
		e.preventDefault();
		let newBook = {
			title,
			author,
			category,
			isbn,
			status,
		};
		const resp = await axios.post('/api/books/newbook', newBook);
		console.log(resp.data);
	};

	return (
		<form className="search">
			<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
			/>
			<input onClick={callSearchFunction} type="submit" value="SEARCH" />
		</form>
	);
};

export default Search;
