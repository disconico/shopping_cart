import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../../Context/FilterContext';
import CollectionComponent from './CollectionComponent';

import leftImg from '../../assets/images/leftImg.jpg';
import rightImg from '../../assets/images/rightImg.jpg';

const Home = () => {
  const { filters, setCurrentFilter } = useContext(FilterContext);

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const collections = filters.map((filter, index) => {
    return (
      <CollectionComponent
        key={index}
        index={index}
        filter={filter}
        onClick={() => handleClick(filter)}
      />
    );
  });

  return (
    <section className='home'>
      <div className='home-hero'>
        <div className='home-hero--div'>
          <div className='home-hero--div--empty'></div>
          <div className='home-hero--div--right'>
            <h1>Beautiful Plants Right to your Doorstep</h1>
            <h3>Shopping for Plants Has Never Been Easier</h3>
            <Link to='/products'>
              <span className='button-span'>
                <span></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='home-collections'>
        <h1>Featured collections</h1>
        <div className='home-collections-list'>{collections}</div>
      </div>
      <div className='home-brighten home-display'>
        <div className='home-brighten--left'>
          <img src={leftImg} className='home-img'></img>
        </div>
        <div className='home-brighten--right'>
          <h3>Brighten Your Living Space</h3>
          <h4>
            Bring nature home with you. Styling your home with plants is an easy
            and inexpensive way to bring the most boring rooms to life.
          </h4>
          <Link to='/products'>
            <span className='button-span'>
              <span></span>
            </span>
          </Link>
        </div>
      </div>
      <div className='home-purify home-display'>
        <div className='home-purify--left'>
          <h3>Breathe Better. Live Better.</h3>
          <h4>
            Healthy air quality should be a top priority. Plants release oxygen
            and remove toxins from the air so you can work, breathe, and sleep
            easier.
          </h4>
          <Link to='/products'>
            <span className='button-span'>
              <span></span>
            </span>
          </Link>
        </div>
        <div className='home-purify--right'>
          <img src={rightImg} className='home-img' />
        </div>
      </div>
    </section>
  );
};

export default Home;
