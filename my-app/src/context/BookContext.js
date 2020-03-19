import React, { createContext, useState } from 'react';

export const BookContext = createContext();

function BookContextProvider(props) {
    const[ books, setBooks ] = useState([
        {title: 'recursion', id: 1},
        {title: 'woman in the window', id: 2},
        {title: 'animal farm', id: 3},
        {title: 'pines', id: 4},
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

