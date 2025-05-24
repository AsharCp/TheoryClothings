import React from 'react'


const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center px-8 border-b-2'>
        <div className='bg-white font-mono sw-full h-fit p-6 bg-whites font-bold text-4xl'>THEORY.clothings</div>
        <button className='bg-black text-white py-2 px-4 text-xl font-semibold rounded hover:bg-gray-200 hover:text-black'>Contact Seller</button>
        
        
    </div>
    
  )
}

export default Header