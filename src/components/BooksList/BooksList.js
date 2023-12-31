import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeBook } from "../../redux/booksRedux";

const BooksList = () => {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    const deleteBook = bookId => {
        dispatch(removeBook(bookId));
    };

    return (
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => deleteBook(book.id)}>Remove</button></li>)}
        </ul>
    );
};

export default BooksList;


// Class component

// import React from 'react';

// class BooksList extends React.Component {

//     redner() {
//         return (
//             <ul>
//                 {this.props.books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => this.props.removeBook(book.id)}>Remove</button></li>)}
//             </ul>
//         );
//     }
// };

// export default BooksList;