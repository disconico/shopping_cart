import React, { useContext } from 'react';
import { Context } from '../Context/CartContext';
import { FilterContext } from '../Context/FilterContext';

import ProductMiniature from './ProductMiniature';

const Products = () => {
  const { products } = useContext(Context);
  const { filters, currentFilter, setCurrentFilter } =
    useContext(FilterContext);

  const productsToDisplay = products.map((product) => {
    const productsArray = [];
    if (product[currentFilter] || currentFilter === 'all') {
      productsArray.push(
        <ProductMiniature
          key={product.id}
          img={product.img}
          id={product.id}
          price={product.price}
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
    setCurrentFilter(newFilter);
  };

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
