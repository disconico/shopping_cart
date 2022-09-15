import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductMiniature = ({ name, img, id }) => {
  return (
    <div className='product-miniature'>
      <Link to={`/products/${name}`}>
        <p>{name}</p>
        <img src={img} className='product-miniature--img'></img>
      </Link>
      {/* <button onClick={() => removeItemFromCart(product)}>-</button> */}
    </div>
  );
};

ProductMiniature.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
};

export default ProductMiniature;
