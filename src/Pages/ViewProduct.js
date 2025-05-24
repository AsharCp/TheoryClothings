import React from 'react'
import Product3 from '../Assets/Product1.jpg'
import { useLocation } from 'react-router-dom'

const ViewProduct = () => {

  const location = useLocation();
  const { itemData } = location.state || {}; // fallback if no state

  if (!itemData) {
    return <div>No product data available.</div>;
  }

  


  return (
    <div className='flex justify-center max- w-screen'>
      <div className='w-4/5 m-8 my-20 border rounded flex flex-col md:flex-row  overflow-y-scroll'>
         <div className='md:w-1/3 h-fit bg-red-100'>
            <img src={itemData.Image} alt='Product' style={{ width: '100%', height: '100%' }}></img>
         </div>
         <div className='md:w-2/3 p-4 flex flex-col justify-start gap-4 '>
             <div className='font-bold text-3xl'>{itemData.Brand}</div>
             <div className='font-semibold text-xl text-gray-500'>{itemData.Name}</div>
             <div className='font-bold text-3xl'>₹{itemData.Price}</div>
             <div className='font-bold text-xl text-gray-500'>Size {itemData.Size}</div>
             <div>{itemData.Description}</div>
             <button className='w-full py-4 font-bold text-lg bg-black text-white'>BUY NOW</button>
         </div>
      </div>

    </div>
  )
}

export default ViewProduct