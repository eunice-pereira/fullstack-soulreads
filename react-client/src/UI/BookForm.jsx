import React, {  useState } from 'react';

function BookForm(props) {
    const [title, setTitle] = useState("");
    const [returned, setReturned] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        search(title)
        alert(`Searching Title ${title}`)
    }

  const search = query => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms=${query}`;
   

    fetch(url)
      .then(results => results.json())
      .then(data => {
      
        setReturned(data.items)
      });
  };
  console.log(returned)
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <label>
          Book Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      {returned.length&&returned.map(item => (
        <div>{item.volumeInfo.title}
        <p>{item.volumeInfo.authors}</p>
        <p>{item.volumeInfo.categories}</p>
        <p>{item.volumeInfo.description}</p>
        <img src={item.volumeInfo.imageLinks.thumbnail}></img> 
        </div>
      ))}
      </div>

    );
  }


  export default BookForm;