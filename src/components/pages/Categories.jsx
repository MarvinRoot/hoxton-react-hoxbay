export default function Categories(props) {
    return (
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
                <li onClick={()=>props.setSelectedCategory(1)}>
                    <a href="/categories/1">electronics</a>
                </li>

                <li onClick={()=>props.setSelectedCategory(2)}>
                    <a href="/categories/2">jewelery</a>
                </li>

                <li onClick={()=>props.setSelectedCategory(3)}>
                    <a href="/categories/3">men's clothing</a>
                </li>

                <li onClick={()=>props.setSelectedCategory(4)}>
                    <a href="/categories/4">women's clothing</a>
                </li>
            </ul>
        </section>
    )
}