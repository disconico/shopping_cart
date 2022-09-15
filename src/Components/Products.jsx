import React from 'react';

import data from '../assets/productsData';
import ProductMiniature from './ProductMiniature';

const Products = () => {
  const productsArray = data;

  const products = productsArray.map((product) => {
    return (
      <ProductMiniature
        key={product.id}
        img={product.img}
        name={product.name}
        product={product}
      />
    );
  });

  return (
    <div className='products-page'>
      <div className='product-page--header'>
        <h1 className='products-page--title'>Products</h1>
        <h3 className='products-page--desc'>
          Shopping for plants has never been easier
        </h3>
        <div className='products-page--filters'>
          <ul>
            <li>Filter a</li>
            <li>Filter b</li>
            <li>Filter c</li>
            <li>Filter d</li>
          </ul>
        </div>
      </div>
      <div className='products-page--list'>{products}</div>
    </div>
  );
};

export default Products;
