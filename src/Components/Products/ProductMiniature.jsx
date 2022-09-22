import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useHover from '../../hooks/useHover';

const ProductMiniature = ({ name, img, price }) => {
  const [hovered, ref] = useHover();

  return (
    <div className='product-miniature' ref={ref}>
      <div className='product-miniature--container'>
        <img
          src={img}
          className={`product-miniature--img ${hovered && 'img-hovered'}`}
          draggable='false'
        ></img>
        {hovered && (
          <Link to={`/products/${name}`}>
            <button className='product-button'>Shop Now</button>
          </Link>
        )}
      </div>

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
