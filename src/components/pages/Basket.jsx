export default function Basket(props) {
    let productAmount = null
    let productCost = 0
    let totalCost = 0
    return (
        <section className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {props.basket.map(product => {
                    <li>
                        <article className="basket-container__item">
                            <img src={product.image} alt={product.title} width={90} />
                            <p>{product.title}</p>
                            <p>Qty:
                                <select onChange={(e) => { productAmount = e.target.value }} name="" id="">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </p>
                            <p>Item total: {productCost += (product.price * productAmount)}</p>
                        </article>
                    </li>
                })}

            </ul>
            {/* <!-- Basket total is calculated using each item's total from above --> */}
            {totalCost += productCost}
            <h3>Your total: {'£' + totalCost}</h3>
        </section>
    )
}