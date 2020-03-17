import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

function Navbar() {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have { books.length} to read</p>
        </div>
    )
}

export default Navbar;
