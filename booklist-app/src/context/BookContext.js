import React, { createContext, useState, useReducer } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookContext = createContext();
function BookContextProvider(props) {

    // const[age, dispatch] = useReducer(ageReducer,20)

    const[books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id:1},
        {title: 'the final empire', author: 'brandon sanderson', id:2},
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv1()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;
