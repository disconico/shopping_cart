import React, { useContext } from 'react';

import { Context } from '../../Context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, totalPrice, totalProducts } = useContext(Context);

  const itemsToDisplay = cartItems
    .filter((item) => item.quantity)
    .map((item, index) => <CartItem key={index} item={item} />);

  return (
    <div className='cart-section'>
      <div className='cart-items'>{itemsToDisplay}</div>
      <div className='cart-section--sum-up'>
        <p>Number of items : {totalProducts}</p>
        <p>Total price : ${totalPrice}</p>
      </div>
      <div className='cart-section--place-order'>
        <span className='button-span'>
          <a></a>
        </span>
      </div>
    </div>
  );
};

export default Cart;
