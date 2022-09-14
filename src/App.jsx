import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import About from './Components/About';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:name' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
