import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "./redux/booksRedux";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => fetchBooks(dispatch), [dispatch]);

    return (
        <div>
            <h1>Books App</h1>
            <BooksList />
            <BookForm />
        </div>
    );
}

export default App;
