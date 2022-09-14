import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductMiniature = (props) => {
  const { name, img } = props;

  return (
    <div className='product-miniature'>
      <Link to={`/products/${name}`}>
        <p>{name}</p>
        <img src={img}></img>
      </Link>
    </div>
  );
};

ProductMiniature.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
};

export default ProductMiniature;
