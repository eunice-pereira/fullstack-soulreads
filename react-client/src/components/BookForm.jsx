import React, { useState } from 'react';

function BookForm(props) {
  const [title, setTitle] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Searching Title ${title}`)
  }
  return (
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
  );
}




// class Search extends Component {
//   token = null;
//   state = {
//     query: "",
//     books: []
//   };

//   onChange = e => {
//     const { value } = e.target;
//     this.setState({
//       query: value
//     });

//     this.search(value);
//   };

//   search = query => {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms=${query}`;
//     const token = {};
//     this.token = token;

//     fetch(url)
//       .then(results => results.json())
//       .then(data => {
//         if (this.token === token) {
//           this.setState({ book: data.results });
//         }
//       });
//   };

//   componentDidMount() {
//     this.search("");
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           className="search-box"
//           placeholder="Search for..."
//           onChange={this.onChange}
//         />
//         {this.state.book.map(books => (
//           <ul key={books.name}>
//             <li>{books.name}</li>
//           </ul>
//         ))}
//       </form>
//     );
//   }
// }

export default BookForm;