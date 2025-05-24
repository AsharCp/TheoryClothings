import React from 'react'


const Header = () => {
  return (
    <div className='flex flex-row sm:justify-between items-center md:px-8 border-b-2'>
        <div className='bg-white font-mono sw-full h-fit p-4 md:p-6 bg-whites font-bold text-2xl sm:text-3xl md:text-4xl'>THEORY.clothings</div>
        <button className='bg-black invisible sm:visible text-white md:py-2 px-2 text-center md:px-4 text-lg rounded hover:bg-gray-200 hover:text-black'>Contact</button>
        
        
    </div>
    
  )
}

export default Header