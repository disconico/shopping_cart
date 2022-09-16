import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filters] = useState(['all', 'beginner', 'purify', 'petFriendly']);
  const [currentFilter, setCurrentFilter] = useState(filters[0]);

  return (
    <FilterContext.Provider
      value={{ filters, currentFilter, setCurrentFilter }}
    >
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
