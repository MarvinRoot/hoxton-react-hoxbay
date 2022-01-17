import { useEffect, useState } from 'react'

import ProductList from '../ProductList'

function Products() {
  const [products, setProducts] = useState([])

  // fetch products
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  return (
    <section className="products-container main-wrapper">
      <ProductList products={products} />
    </section>
  )
}

export default Products