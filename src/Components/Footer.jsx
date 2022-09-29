import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../Context/FilterContext';

import github from '../assets/images/github-logo.png';
import linkedin from '../assets/images/linkedin.png';

const Footer = () => {
  const { setCurrentFilter } = useContext(FilterContext);

  return (
    <footer>
      <div className='footer-div--1'>
        <h2>Join the Bioty Family</h2>
        <h5>
          Get plant care tips and tricks delivered straight to your mailbox.
          <div className='footer-input'>
            <input type='text' placeholder='Enter Your Email...' />
            <button>Subscribe</button>
          </div>
        </h5>
      </div>
      <div>
        <h3>Biotyplants</h3>
        <Link to='/shopping_cart/contact'>
          <h5>About Us</h5>
        </Link>
        <Link to='/shopping_cart/contact'>
          <h5>Contact</h5>
        </Link>
      </div>
      <div>
        <h3>Shop with us</h3>
        <Link
          to='/shopping_cart/products'
          onClick={() => setCurrentFilter('purify')}
        >
          <h5>Air Purifying</h5>
        </Link>
        <Link
          to='/shopping_cart/products'
          onClick={() => setCurrentFilter('beginner')}
        >
          <h5>Beginner Friendly</h5>
        </Link>
        <Link
          to='/shopping_cart/products'
          onClick={() => setCurrentFilter('petFriendly')}
        >
          <h5>Pet Friendly</h5>
        </Link>
      </div>
      <div>
        <h3>Contact</h3>
        <h5>disconico@outlook.com</h5>
        <div className='footer-icons'>
          <a
            href='https://github.com/disconico'
            target='_blank'
            rel='noreferrer'
          >
            <img className='github-icon' src={github} />
          </a>
          <a
            href='https://www.linkedin.com/in/nicolas-gu%C3%A9rin-7a2983b6/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='linkedin-icon' src={linkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
