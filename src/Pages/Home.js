import React from 'react'
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <div className="flex flex-col">
        <Navbar/>
        <Product/>
    </div>
  )
}

export default Home