import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../Context/CartContext';

const ProductMiniature = ({ name, img, product }) => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(Context);

  const [numberOfThisItem, setNumberOfThisItem] = useState(0);

  // useEffect(() => {
  //   setNumberOfThisItem(() => {
  //     const nbOfThisItemInCart = cartItems.filter(
  //       (item) => item.id === product.id
  //     ).length;
  //     return nbOfThisItemInCart;
  //   });
  // }, [cartItems]);

  const nbOfThisItemInCart = cartItems.filter(
    (item) => item.id === product.id
  ).length;

  return (
    <div className='product-miniature'>
      <Link to={`/products/${name}`}>
        <p>{name}</p>
        <img src={img} className='product-miniature--img'></img>
      </Link>
      <button onClick={() => removeItemFromCart(product)}>-</button>
      <p>{nbOfThisItemInCart}</p>
      <button onClick={() => addItemToCart(product)}>+</button>
    </div>
  );
};

ProductMiniature.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default ProductMiniature;
