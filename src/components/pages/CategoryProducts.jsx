import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductList from "../ProductList"

export default function CategoryProducts() {
    const params = useParams()
    const [products, setProducts] = useState([])

    // fetch products
    useEffect(() => {
        fetch(`http://localhost:3001/products?categoryId=${params.categoryId}`)
            .then(resp => resp.json())
            .then(productsFromServer => setProducts(productsFromServer))
    }, [])

    return (
        <h1>
            Products for category: {params.categoryId}
            <ProductList products={products} />
        </h1>
    )
}