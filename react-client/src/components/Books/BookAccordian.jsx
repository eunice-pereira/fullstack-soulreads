// import React from 'react';
// import { Accordion, Card, Image } from "react-bootstrap";


// const BookAccordion = props => {
//     const { book } = props;
//     return (
//         <Accordion style={{ width: "90%", margin: "0px auto 40px", cursor: "pointer" }}>
//             {
//                 book(book => {
//                     return (
//                         <Card key={book.id}>
//                             <Accordion.Toggle as={Card.Header} eventKey={book.id}>
//                                 {book.title}
//                             </Accordion.Toggle>
//                             <Accordion.Collapse eventKey={book.id}>
//                                 <Card.Body>
//                                     <Image>{/* add image for card */}</Image>
//                                     <h5 style={{ marginBottom: "0" }}>{book.title}</h5>
//                                     <p style={{ fontSize: ".8rem", fontStyle: "italic" }}>Release Date: {new Date(book.release_date).toLocaleDateString()}</p>
//                                     <p>{book.overview}</p>
//                                 </Card.Body>
//                             </Accordion.Collapse>
//                         </Card>
//                     )
//                 })
//             }
//         </Accordion>
//     );
// }

// export default BookAccordion;