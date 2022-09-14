import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <div className='header--left'>
        <h2>
          <Link to='/'>My E-commerce site</Link>
        </h2>
      </div>

      <div className='header--right'>
        <div className='header--link'>
          <Link to='/about' className='header--link--about'>
            About
          </Link>
        </div>
        <div className='header--link'>
          <Link to='/products' className='header--link--products'>
            Products
          </Link>
        </div>
        <div className='header--link'>
          <Link to='/contact' className='header--link--contact'>
            Contact
          </Link>
        </div>
        <div className='header--link'>
          <Link to='cart' className='header--link--cart'>
            <p>My Cart (X)</p>
            <i className='ri-shopping-cart-line ri-fw ri-2x'></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
