import React, { useState, useContext } from 'react';
import { Context } from '../Context/CartContext';

import ProductMiniature from './ProductMiniature';

const Products = () => {
  const { products, filters } = useContext(Context);
  const [filter, setFilter] = useState(filters[0]);

  const productsToDisplay = products.map((product) => {
    const productsArray = [];
    if (product[filter] || filter === 'all') {
      productsArray.push(
        <ProductMiniature
          key={product.id}
          img={product.img}
          id={product.id}
          name={product.name}
        />
      );
    }
    return productsArray;
  });

  const filtersToDisplay = filters.map((filter) => {
    return (
      <button
        key={filter}
        onClick={(event) => handleClick(event.target.innerText)}
      >
        {filter}
      </button>
    );
  });

  const handleClick = (newFilter) => {
    setFilter(newFilter);
    console.log(filter);
  };

  // const productsToDisplay = products.map((product) => {
  //   return (
  //     <ProductMiniature
  //       key={product.id}
  //       img={product.img}
  //       id={product.id}
  //       name={product.name}
  //     />
  //   );
  // });

  return (
    <div className='products-page'>
      <div className='product-page--header'>
        <h1 className='products-page--title'>Products</h1>
        <h3 className='products-page--desc'>
          Shopping for plants has never been easier
        </h3>
        <div className='products-page--filters'>{filtersToDisplay}</div>
      </div>
      <div className='products-page--list'>{productsToDisplay}</div>
    </div>
  );
};

export default Products;
