import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './compomemts/products'
import Buy from './compomemts/Buy'
import Cart from './compomemts/Cart'
import Navbar from './compomemts/Navbar'
import Payment from './compomemts/Payment'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
