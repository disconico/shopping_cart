import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import ProductDetail from './Components/Products/ProductDetail';
import Products from './Components/Products/Products';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/shopping_cart' element={<Home />} />
        <Route path='/shopping_cart/*' element={<Home />} />
        <Route path='/shopping_cart/about' element={<About />} />
        <Route path='/shopping_cart/products' element={<Products />} />
        <Route
          path='/shopping_cart/products/:name'
          element={<ProductDetail />}
        />
        <Route path='shopping_cart/contact' element={<Contact />} />
        <Route path='shopping_cart/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
