import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/CartContext';
import Selector from '../Helpers/Selector';
import useHover from '../../hooks/useHover';

const CartItem = ({ item }) => {
  const { img, itemPrice, name, quantity } = item;
  const totalPrice = itemPrice * quantity;
  const [currentSelection, setCurrentSelection] = useState(parseInt(quantity));

  const { cartItems, addItemToCart, removeAllOfThisItem } = useContext(Context);

  const [hovered, ref] = useHover();
  const iconClassName = hovered
    ? 'ri-delete-bin-2-fill'
    : 'ri-delete-bin-2-line';

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
        <Selector handleSelection={handleSelection} startValue={quantity} />
        <button className='delete-button'>
          <i
            className={`binIcon ${iconClassName}`}
            ref={ref}
            onClick={() => removeAllOfThisItem(thisProduct)}
          ></i>
        </button>
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
