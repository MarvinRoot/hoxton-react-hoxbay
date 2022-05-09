import { Link } from "react-router-dom";
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var colors = ['#88b719', '#f4ae01', '#0064d3', '#e53238', '#19b7af', '#e532e5'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export default function Categories() {
    return (
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
                <li style={{backgroundColor: `${getRandomColor()}`}}>
                    <Link to={'/categories/1'}>electronics</Link>
                </li>

                <li style={{backgroundColor: `${getRandomColor()}`}}>
                <Link to={'/categories/2'}>jewelery</Link>
                </li>

                <li style={{backgroundColor: `${getRandomColor()}`}}>
                <Link to={'/categories/3'}>men's clothing</Link>
                </li>

                <li style={{backgroundColor: `${getRandomColor()}`}}>
                <Link to={'/categories/4'}>women's clothing</Link>
                </li>
            </ul>
        </section>
    )
}