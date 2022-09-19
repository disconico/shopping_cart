import React, { useContext } from 'react';

import { Context } from '../Context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(Context);

  const itemsToDisplay = cartItems
    .filter((item) => item.quantity)
    .map((item, index) => <CartItem key={index} item={item} />);

  return <div className='cart-items'>{itemsToDisplay}</div>;
};

export default Cart;
