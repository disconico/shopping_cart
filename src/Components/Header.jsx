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
          <Link to='/shopping_cart'>BIOTYPLANTS</Link>
        </h2>
      </div>

      <div className='header--middle'>
        <div className='header--link'>
          <Link to='/shopping_cart/products' className='header--link--products'>
            Products
          </Link>
        </div>
        <div className='header--link'>
          <Link to='/shopping_cart/contact' className='header--link--contact'>
            Contact
          </Link>
        </div>
      </div>
      <div className='header--right'>
        <div className='header--link--cart'>
          <p>
            {totalProducts} items / {`$${Math.round(totalPrice)}`}
          </p>
          <Link to='/shopping_cart/cart'>
            <i className={cartLogo}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
