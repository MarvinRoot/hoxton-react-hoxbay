import { useParams } from "react-router-dom"

export default function CategoryProducts(props) {
    const params = useParams()

    return (
        <section>
            <p> {params.categoryId}</p>
            {props.products.filter(product => {
                product.categoryId === params.categoryId
            }).map(product => {
                <li>
                    <article className="product-item">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                    </article>
                </li>
            })}
        </section>
    )
}