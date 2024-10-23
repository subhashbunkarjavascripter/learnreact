"use client"
import {Router,NavLink, Routes,Route, Link } from'react-router-dom'
import React from 'react'
import User from './components/user'
import Product from './components/product'
import Cart from './components/cart'
import Home from './components/home'

const App = () => {

  return (
    <>
     <nav className='flex justify-center gap-9 text-black font-bold bg-slate-400 p-5'>
       
         
          

        <NavLink className={(e) => (e.isActive ? "text-red-600 underline":""  )} to='/'>Home</NavLink> 
        <NavLink className={(e) => (e.isActive ? "text-red-600 underline":""  )} to='/product'>Product</NavLink> 
        <NavLink  className={(e) => (e.isActive ? "text-red-600 underline":"" )} to='/user'>User</NavLink> 
        <NavLink className={(e) => (e.isActive ? "text-blue-900 underline": "")} to='/carts'>Carts</NavLink> 


     </nav>


     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App