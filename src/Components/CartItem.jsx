import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Context } from '../Context/CartContext';
import Selector from './Helpers/Selector';

const CartItem = ({ item }) => {
  const { img, itemPrice, name, quantity } = item;
  const totalPrice = itemPrice * quantity;

  const [currentSelection, setCurrentSelection] = useState(parseInt(quantity));

  const { cartItems, addItemToCart } = useContext(Context);

  const thisProduct = cartItems.find((prod) => prod.name === name);

  const handleSelection = (num) => {
    setCurrentSelection(parseInt(num));
  };

  useEffect(() => {
    addItemToCart(thisProduct, currentSelection);
  }, [currentSelection]);

  return (
    <>
      <div className='cart-item'>
        <Link to={`/products/${name}`}>
          <img src={img} className='cart-item--img' draggable='false'></img>
        </Link>
        <p className='cart-item--name'>{name}</p>
        <p className='cart-item--price'>${itemPrice}</p>
        <p className='cart-item--quantity'>Quantity :{quantity}</p>
        <Selector handleSelection={handleSelection} startValue={quantity} />
        {/* <button onClick={() => addItemToCart(thisProduct, currentSelection)}>
          update selection
        </button> */}
        <p className='cart-item--total'>
          Total : <span>${totalPrice}</span>
        </p>
      </div>
      <hr />
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
