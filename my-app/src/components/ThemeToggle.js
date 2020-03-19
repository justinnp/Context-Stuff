import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context
//         return (
//             <button onClick={toggleTheme}>Toggle Dark Mode</button>
//         )
//     }
// }

function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    return(
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
    )
}

export default ThemeToggle;
