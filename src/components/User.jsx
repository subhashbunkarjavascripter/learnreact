import React, { useEffect, useState } from 'react'
 import axios  from '../utils/axios'

 
 const user = () => {
  const [toggle, settoggle] = useState(false)
  const [users, setusers] = useState(null)
  const getuser = async () => {
    try {
      const {data} = await axios.get("/users");
      console.log(data)
    } catch (error) {
    console.log(error)      
    }
   };

   useEffect(() => {
    console.log("[User.jsx] Created")
    getuser();
    return () => {
      console.log("[User.jsx] Destroyed")
    }
   }, [toggle]);

   console.log(toggle);


   return (
     <div>

    <h1 className='text-black text-3xl font-bold'>User</h1>
    <button onClick={() => {settoggle(!toggle)}} className='px-4 py-2 bg-black text-white rounded'>Toggle</button>

     </div>
   )
 }
 
 export default user