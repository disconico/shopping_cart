import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../../Context/FilterContext';
import CollectionComponent from './CollectionComponent';

import leftImg from '../../assets/images/leftImg.jpg';
import rightImg from '../../assets/images/rightImg.jpg';

import love1 from '../../assets/images/love1.jpg';
import love2 from '../../assets/images/love2.jpg';
import love3 from '../../assets/images/love3.jpg';

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
            <Link to='/shopping_cart/products'>
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
          <Link to='/shopping_cart/products'>
            <span
              className='button-span'
              onClick={() => setCurrentFilter('all')}
            >
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
          <Link to='/shopping_cart/products'>
            <span
              className='button-span'
              onClick={() => setCurrentFilter('purify')}
            >
              <span></span>
            </span>
          </Link>
        </div>
        <div className='home-purify--right'>
          <img src={rightImg} className='home-img' />
        </div>
      </div>
      <div className='home-love'>
        <h1>Why You&#39;ll Love Biotyplants</h1>
        <div className='home-love-main'>
          <div className='home-love-div'>
            <img src={love1} alt='' />
            <h3>Planted with Love</h3>
            <h5>
              Our plants cultivated by experts who share the same passion for
              houseplants as you. We guarantee your plant arrives happy and
              healthy or your money back!
            </h5>
          </div>
          <div className='home-love-div'>
            <img src={love2} alt='' />
            <h3>Sustainable Approach</h3>
            <h5>
              Our Eco-Friendly Packaging is 100% biodegradable! Everything we
              ship can be broken down as fertilizer for your plants!
            </h5>
          </div>
          <div className='home-love-div'>
            <img src={love3} alt='' />
            <h3>Hand Crafted</h3>
            <h5>
              Materials are sourced locally and hand-crafted by artisans from
              our community. Each ceramic piece will be unique to your own
              living space.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
