// import React, { useState } from "react";
// import { Table, NavLink } from "react-bootstrap";

// const BookTable = props => {
//     let keys = ["popularity", "title", "release_date", "overview"];
//     const { books } = props;
//     console.log(books)
//     console.log('--------------')
//     return (
//         <div style={{ width: "90%", margin: "0 auto" }}>
//             <Table
//                 variant="default"
//                 style={{ width: "100%", margin: "20px auto" }}
//                 striped
//                 bordered
//                 responsive
//             >
//                 <thead>
//                     <tr>
//                         {keys.map(heading => {
//                             return <td key={heading}>{heading}</td>;
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {books.map(book => {
//                         return (
//                             <tr key={book.id}>

//                                 <td>{book.title}</td>
//                                 <td>{book.author}</td>
//                                 <td>{book.category}</td>
//                                 <td>{book.status}</td>

//                                 <td>modal</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default BookTable;