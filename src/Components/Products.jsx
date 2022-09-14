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
      />
    );
  });

  return (
    <div>
      <h1>Products</h1>
      {products}
    </div>
  );
};

export default Products;
