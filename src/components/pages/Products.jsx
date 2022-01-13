export default function Products(props) {
    return (
        <section className="products-container main-wrapper">
            <ul className="products-container__list">
                {props.products.map((product) => {
                    <li>
                        <article className="product-item">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                        </article>
                    </li>
                })}
            </ul>
        </section>
    )
}