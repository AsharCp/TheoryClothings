import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-16 font-mono justify-center mt-8  font-semibold text-xl'>
        <div className='border-b-2 border-transparent hover:border-b-2 hover:border-gray-200'>NEW PRODUCTS</div>
        <div className='hover:border-b-2'>ABOUT US</div>
        <div className='hover:border-b-2'>SHOP</div>
        <div className='hover:border-b-2'>CONTACT US</div>
    </div>
  )
}

export default Navbar