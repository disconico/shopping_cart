import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const filters = ['all', 'beginner', 'purify', 'petFriendly'];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { FilterContextProvider, FilterContext };
