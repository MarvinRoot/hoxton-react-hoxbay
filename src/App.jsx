import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Products from './components/pages/Products'
import Categories from './components/pages/Categories'
import Basket from './components/pages/Basket'

function App() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

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
            <Route path='/categories' element={<Categories setSelectedCategory={setSelectedCategory}/>} />
            <Route path='/basket' element={<Basket />} />
          </Routes>
        }
      </main>
    </div>
  )
}

export default App
