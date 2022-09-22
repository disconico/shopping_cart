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
    <div className='product-detail'>
      <div className='product-detail--left'>
        <img src={thisProduct.img} draggable='false' />
      </div>
      <div className='product-detail--right'>
        <div className='product-detail--name-and-price'>
          <h1>{thisProduct.name}</h1>
          <h3>${thisProduct.itemPrice}</h3>
        </div>
        <div className='product-detail--light'>
          <h5>
            This product requires{' '}
            <span className='bold'>{thisProduct.light}</span>.
          </h5>
        </div>
        <div className='product-detail--review'>
          <i className='ri-star-fill'></i>
          <i className='ri-star-fill'></i>
          <i className='ri-star-fill'></i>
          <i className='ri-star-fill'></i>
          <i className='ri-star-half-fill'></i>
          <a className='review-link'>7,329 Reviews</a>
        </div>
        <hr></hr>
        {/* <p> Current selection is : {currentSelection} </p> */}
        <div className='product-detail--pot'>
          <h3>Ceramic Pot Color</h3>
          <span className='pot'></span>
          <p>White</p>
        </div>
        <hr></hr>
        <div className='product-detail--details'>
          <h3>Details</h3>
          <div className='details-light'>
            <i className='ri-sun-fill'></i>
            <h5>{thisProduct.light}</h5>
          </div>
          {thisProduct.beginner && (
            <div className='details-beginner'>
              <i className='ri-magic-line'></i>
              <h5>Beginner Friendly</h5>
            </div>
          )}
          {thisProduct.purify && (
            <div className='details-purify'>
              <i className='ri-windy-line'></i>
              <h5>Air Purifying</h5>
            </div>
          )}
          {thisProduct.petFriendly && (
            <div className='details-petFriendly'>
              <i className='ri-aliens-fill'></i>
              <h5>Pet Friendly</h5>
            </div>
          )}
        </div>
        <hr></hr>
        <p>There is : {nbOfThisItemInCart} in cart</p>
        <div className='add-to-cart'>
          <Selector handleSelection={handleSelection} />
          <button onClick={() => addItemToCart(thisProduct, currentSelection)}>
            Add {currentSelection} to Cart
          </button>
        </div>
        <div className='product-detail--other-buttons'>
          <button onClick={() => removeAllOfThisItem(thisProduct)}>
            Remove from cart
          </button>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
