import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import beginnerImg from '../../assets/images/beginner.jpg';
import allImg from '../../assets/images/all.jpg';
import petFriendlyImg from '../../assets/images/petFriendly.jpg';
import purifyImg from '../../assets/images/purify.jpg';

const CollectionComponent = ({ index, filter, onClick }) => {
  const img = [allImg, beginnerImg, purifyImg, petFriendlyImg];
  const currentImg = img[index];

  return (
    <div className='home-collection-component'>
      <Link to='/products' onClick={onClick}>
        <img src={currentImg} className='home-collection-component-img'></img>
        <p>{`${filter}`}</p>
      </Link>
    </div>
  );
};

CollectionComponent.propTypes = {
  index: PropTypes.number,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CollectionComponent;
