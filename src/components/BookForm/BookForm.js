import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/booksRedux';

const BookForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBook({ title, author }));
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            <button>Add book</button>
        </form>
    );
};

export default BookForm;

// Class component

// import React from 'react';

// class BookForm extends React.Component {

//     state = {
//         title: '',
//         author: ''
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.addBook({ title: this.state.title, author: this.state.author });
//         this.setState({ ...this.state, title: '', author: '' });
//     }

//     setTitle = value => {
//         this.setState({ ...this.state, title: value })
//     }

//     setAuthor = value => {
//         this.setState({ ...this.state, author: value })
//     }

//     render() {
//         const { handleSubmit, setTitle, setAuthor } = this;
//         const { title, author } = this.state;

//         return (
//             <form onSubmit={handleSubmit}>
//                 Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
//                 Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
//                 <button>Add book</button>
//             </form>
//         );
//     }
// };

// export default BookForm;