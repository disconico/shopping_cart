import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/CartContext';
import CartItem from './CartItem';
import useAuth from '../../hooks/useOrder';

const Cart = () => {
  const { cartItems, emptyCart, totalPrice, totalProducts } =
    useContext(Context);

  const [started, loading, ordered, placeOrder, endOrder, delay] = useAuth();

  const itemsToDisplay = cartItems
    .filter((item) => item.quantity)
    .map((item, index) => <CartItem key={index} item={item} />);

  const handleOrder = () => {
    placeOrder();
    setTimeout(() => {
      emptyCart();
    }, delay);
  };

  const handleEndOfOrder = () => {
    endOrder();
  };

  return (
    <section className='cart-section'>
      {!started && (
        <div>
          <div className='cart-items'>{itemsToDisplay}</div>
          <div className='cart-section--sum-up'>
            <p>Number of items : {totalProducts}</p>
            <p>Total price : ${totalPrice}</p>
          </div>
          <div className='cart-section--place-order'>
            <span className='button-span' onClick={handleOrder}>
              <a></a>
            </span>
          </div>
          <button onClick={() => emptyCart()}>EMPTY CART</button>
        </div>
      )}
      {loading && (
        <div className='spinner'>
          <div className='loadingio-spinner-spin-6zrufzt8gyo'>
            <div className='ldio-6nvuw9l6buc'>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {ordered && (
        <div>
          <h1>Thanks for the order</h1>
          <button onClick={handleEndOfOrder}>
            <Link to='/'>Go back shopping</Link>
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
