import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Selector = ({ startValue = 1, endValue = 10, handleSelection }) => {
  const [currentSelect, setCurrentSelect] = useState(startValue);

  const handleChange = (event) => {
    setCurrentSelect(event.target.value);
  };

  useEffect(() => {
    handleSelection(parseInt(currentSelect));
  }, [currentSelect]);

  return (
    <div className='selector'>
      <select value={currentSelect} onChange={handleChange}>
        {Array.from({ length: endValue - startValue + 1 }).map((_, index) => {
          return (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Selector.propTypes = {
  startValue: PropTypes.number,
  endValue: PropTypes.number,
  handleSelection: PropTypes.func,
};

export default Selector;
