
import './App.css';
import React, { Component }  from 'react';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Cart' element={<Cart/>}/>

    </Routes>
    
    </BrowserRouter>
  )
  
  
};
export default App;
