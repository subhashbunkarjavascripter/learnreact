"use client"
import {Router,NavLink,  Routes,Route, Link } from'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'


const App = () => { 
 
  return ( 
    <> 
     <nav className='w-5/6 flex justify-center p-4 mx-auto bg-zinc-300 mt-4'>
      <h1 className='font-semibold text-3xl text-black'>Home</h1>
     </nav>
    </>
  )

  const data = useSelector((state) => state);
  console.log(data)
}

export default App