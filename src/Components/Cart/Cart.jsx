import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/CartContext';

import CartItem from './CartItem';
import useAuth from '../../hooks/useOrder';

import plant from '../../assets/images/cart-plant.jpg';

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
      {!started && totalProducts === 0 && (
        <div className='cart-section--empty'>
          <div className='cart-section--empty-left'>
            <h1>Your Cart is Empty</h1>
            <Link to='/products'>
              <span className='button-span button-shopping'>
                <span></span>
              </span>
            </Link>
          </div>
          <div className='cart-section--empty-right'>
            <img src={plant} />
          </div>
        </div>
      )}
      {!started && totalProducts > 0 && (
        <div className='cart-section--full'>
          <div className='cart-items'>{itemsToDisplay}</div>
          <div className='cart-section--sum-up'>
            <div className='sum-up--info'>
              <h1>Number of items : {totalProducts}</h1>
              <h4>Total price : ${totalPrice}</h4>
              <h4>Including VAT (${totalPrice / 5})</h4>
              <h4>Shipping : $4.9</h4>
              <h1>Total : ${totalPrice + 4.9}</h1>
            </div>
            <div className='cart-section--place-order'>
              <span className='button-span' onClick={handleOrder}>
                <span></span>
              </span>
            </div>
          </div>

          <div className='empty-cart'>
            <button onClick={() => emptyCart()} className='empty-button'>
              Empty Cart
            </button>
          </div>
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
        <div className='ordered'>
          <div className='ordered--left'>
            <img src={plant} />
          </div>
          <div className='ordered--right'>
            <h1>Thank you for the order!</h1>
            <h5>See you soon 😍</h5>
            <Link to='/'>
              <span
                className='button-span button-home'
                onClick={handleEndOfOrder}
              >
                <span></span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
