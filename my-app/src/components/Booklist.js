import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';


// class Booklist extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="book-list" style={{ color: theme.txt, background: theme.bg }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>Recursion by Blake Crouch</li>
//                     <li style={{ background: theme.ui }}>Woman in the Window by AJ Miller</li>
//                     <li style={{ background: theme.ui }}>Pines by Blake Crouch</li>
//                 </ul>
//             </div>
//         )
//     }
// }


function BookList() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.txt, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}


export default BookList
