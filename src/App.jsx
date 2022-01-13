import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Products from './components/pages/Products'
import Categories from './components/pages/Categories'
import Basket from './components/pages/Basket'
import CategoryProducts from './components/pages/CategoryProducts'
import ProductDetails from './components/pages/ProductDetails'

function App() {
  // const [selectedCategory, setSelectedCategory] = useState()
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/products').then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  })

  return (
    <div className='App'>
      <Header />
      <main>
        {
          <Routes>
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:categoryId' element={<CategoryProducts products={products} setProducts={setProducts} />} />
            <Route path='/products/:productId' element={<ProductDetails setBasket={setBasket} products={products}/>} />
            <Route path='/basket' element={<Basket basket={basket}/>} />
          </Routes>
        }
      </main>
    </div>
  )
}

export default App
