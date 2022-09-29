import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useHover from '../../hooks/useHover';

import beginnerImg from '../../assets/images/beginner.jpg';
import allImg from '../../assets/images/all.jpg';
import petFriendlyImg from '../../assets/images/petFriendly.jpg';
import purifyImg from '../../assets/images/purify.jpg';

const CollectionComponent = ({ index, filter, onClick }) => {
  const img = [allImg, beginnerImg, purifyImg, petFriendlyImg];
  const currentImg = img[index];
  const [hovered, ref] = useHover();

  return (
    <div className='home-collection-component' ref={ref}>
      <img
        src={currentImg}
        className={`home-collection-component-img ${hovered && 'img-hovered'}`}
      ></img>
      <Link to='/shopping_cart/products' onClick={onClick}>
        {hovered && (
          <button className='collection-button'>Shop this Collection</button>
        )}
      </Link>
      <p>{`${filter}`}</p>
    </div>
  );
};

CollectionComponent.propTypes = {
  index: PropTypes.number,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CollectionComponent;
