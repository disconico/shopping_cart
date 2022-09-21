import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './Components/About';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import ProductDetail from './Components/Products/ProductDetail';
import Products from './Components/Products/Products';

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
