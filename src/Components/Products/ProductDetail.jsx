import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/CartContext';
import Selector from '../Helpers/Selector';

const ProductDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { cartItems, addItemToCart, removeAllOfThisItem } = useContext(Context);

  const thisProduct = cartItems.find((prod) => prod.name === name);

  const [currentSelection, setCurrentSelection] = useState(1);

  // Calculate number of this item in global cart
  let nbOfThisItemInCart = 0;
  cartItems.map((obj) => {
    if (obj.id === thisProduct.id) {
      nbOfThisItemInCart = obj.quantity;
    }
    return nbOfThisItemInCart;
  });

  // Add product to cart > TODO
  const handleSelection = (num) => {
    setCurrentSelection(num);
  };

  return (
    <div>
      <h1>
        {thisProduct.name} : ${thisProduct.itemPrice}
      </h1>
      <p> Current selection is : {currentSelection} </p>
      <p>There is : {nbOfThisItemInCart} in cart</p>
      <button onClick={() => addItemToCart(thisProduct, currentSelection)}>
        Add {currentSelection} products to cart
      </button>
      <Selector handleSelection={handleSelection} />
      <button onClick={() => removeAllOfThisItem(thisProduct)}>
        Remove from cart
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default ProductDetail;
