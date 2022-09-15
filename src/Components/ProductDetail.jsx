import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../Context/CartContext';

const ProductDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { cartItems, addItemToCart, removeAllOfThisItem } = useContext(Context);

  const thisProduct = useContext(Context).products.find(
    (prod) => prod.name === name
  );

  // Calculate number of this item in global cart
  let nbOfThisItemInCart = 0;
  cartItems.map((obj) => {
    if (obj.id === thisProduct.id) {
      nbOfThisItemInCart = obj.quantity;
    }
    return nbOfThisItemInCart;
  });

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>{thisProduct.id}</p>
      <p>There is : {nbOfThisItemInCart} in cart</p>
      <button onClick={() => addItemToCart(thisProduct, 3)}>
        Add 3 products to cart
      </button>
      <button onClick={() => removeAllOfThisItem(thisProduct)}>
        Remove from cart
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default ProductDetail;
