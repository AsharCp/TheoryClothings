import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-2 sm:gap-6 md:gap-8 font-mono justify-center mt-8 font-semibold text-md md:text-xl'>
        <div className='border-b-2 border-transparent hover:border-b-2 hover:border-gray-200'>SHIRTS</div>
        <div className='hover:border-b-2'>TSHIRTS</div>
        <div className='hover:border-b-2'>PANTS</div>
        <div className='hover:border-b-2'>SHOES</div>
    </div>
  )
}

export default Navbar