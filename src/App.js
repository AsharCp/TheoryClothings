import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ViewProduct from './Pages/ViewProduct';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/view' Component={ViewProduct}></Route>
      </Routes>
    <Footer/>
      
    </BrowserRouter>
    </>
  );
}

export default App;
