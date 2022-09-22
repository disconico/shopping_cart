import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductMiniature = ({ name, img, price }) => {
  return (
    <div className='product-miniature'>
      <Link to={`/products/${name}`}>
        <img
          src={img}
          className='product-miniature--img'
          draggable='false'
        ></img>
      </Link>
      <div className='product-miniature--details'>
        <p>{name}</p>
        <p className='bold grey'>${price}</p>
      </div>
    </div>
  );
};

ProductMiniature.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
};

export default ProductMiniature;
