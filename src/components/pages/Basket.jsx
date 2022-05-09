import { useState, useEffect } from "react"

export default function Basket() {
    const [basket, setBasket] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/basket').then(resp => resp.json())
            .then(basketFromServer => setBasket(basketFromServer))
    }, [])

    function changeQuantity(item) {
        fetch(`http://localhost:3001/basket/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(resp => resp.json())
    }

    function deleteProduct(id) {
        fetch(`http://localhost:3001/basket/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }

    function updateQuantity(item, newQuantity) {
        let updatedBasket = JSON.parse(JSON.stringify(basket))
        if (newQuantity === 0){
            updatedBasket = updatedBasket.filter(target => target.id != item.id)
            deleteProduct(item.id)
        } else {
            item.quantity = newQuantity
            updatedBasket = updatedBasket.filter(target => target.id !== item.id)
            updatedBasket.push(item)
            changeQuantity(item)
        }
        setBasket(updatedBasket)
    }

    function getTotalCost(basket) {
        let total = 0

        for (const item of basket) {
            total += item.quantity * item.price
        }

        return total.toFixed(2)
    }

    if (basket === []) return <p>Loading...</p>

    return (
        <section className="basket-container">
            <h2>Your Basket</h2>
            {basket.length === 0 ? (
                <p>There are no items in your basket.</p>
            ) : (
                <ul>
                    {basket.map(product => (
                        <li key={product.id}>
                            <article className="basket-container__item">
                                <img src={product.image} alt={product.title} width={90} />
                                <p>{product.title}</p>
                                <p>Qty:
                                    <select defaultValue={product.quantity}
                                        onChange={e => { updateQuantity(product, Number(e.target.value)) }}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </p>
                                <p>Item total: £{(product.price * product.quantity).toFixed(2)}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Your total: {'£' + getTotalCost(basket)}</h3>
        </section>
    )
}