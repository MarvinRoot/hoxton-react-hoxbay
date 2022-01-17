import { Navigate, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Products from './components/pages/Products'
import Categories from './components/pages/Categories'
import Basket from './components/pages/Basket'
import CategoryProducts from './components/pages/CategoryProducts'
import ProductDetails from './components/pages/ProductDetails'

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        {
          <Routes>
            <Route index element={<Navigate replace to="/products" />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:categoryId' element={<CategoryProducts />} />
            <Route path='/products/:productId' element={<ProductDetails/>} />
            <Route path='/basket' element={<Basket />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        }
      </main>
    </div>
  )
}

export default App
