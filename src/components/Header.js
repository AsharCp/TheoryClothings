import React from 'react'


const Header = () => {
  return (
    <div className='flex items-center justify-center sm:justify-between border-b-2 px-4 md:px-8 py-4'>
      <div className='font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-center w-full sm:w-auto'>THEORY.clothings</div>
      <button className='hidden sm:block bg-black text-white md:py-2 px-2 md:px-4 text-lg rounded hover:bg-gray-200 hover:text-black'>Contact</button>
    </div>
    
  )
}

export default Header