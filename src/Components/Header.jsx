import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/CartContext';

const Header = () => {
  const { totalProducts, totalPrice } = useContext(Context);

  const cartLogo =
    totalProducts > 0
      ? 'ri-shopping-cart-fill ri-fw ri-2x'
      : 'ri-shopping-cart-line ri-fw ri-2x';

  return (
    <header className='Header'>
      <div className='header--left'>
        <h2>
          <Link to='/'>BIOTYPLANTS</Link>
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
        <div className='header--link--cart'>
          <p>
            {totalProducts} items / {`$${Math.round(totalPrice)}`}
          </p>
          <Link to='cart'>
            <i className={cartLogo}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
