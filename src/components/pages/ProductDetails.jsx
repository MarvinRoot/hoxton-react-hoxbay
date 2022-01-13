import { Link, useParams } from "react-router-dom"

export default function ProductDetails(props) {
    const params = useParams()

    return (
        <section>
            {props.products.filter(product => {
                product.id === params.productId
            }).map(product => {
                <section className="product-detail main-wrapper">
                    <img src={product.image} alt={product.title} />
                    <div className="product-detail__side">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{'£' + product.price}</p>
                        <Link to={'/basket'}><button onClick={() => {
                            let updatedBasket = [...props.basket, product.id]
                            props.setBasket(updatedBasket)
                        }}>Add to basket</button></Link>
                    </div>
                </section>
            })}
        </section>
    )
}