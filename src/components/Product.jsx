import { useEffect } from "react"
import  axios from "../utils/axios"



 const product = () => {
  const getproducts = async () => {
    try {
      const { data} = await axios.get("/products")
      console.log(data)
    }catch(error){
      console.log(error)
      
    }
  };

  useEffect(() => {
    getproducts();
  },[]);
   
   return (
     <>
     
      <h1 className='text-black text-3xl font-bold'>Product</h1>

      <button onClick={getproducts} className="text-white bg-black px-4 py-2 rounded">Get Products</button>
     </>
   )
 }
 
 export default product