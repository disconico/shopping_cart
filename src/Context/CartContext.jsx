import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
    console.log(cartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const cartCopy = cartItems;
    const itemID = cartCopy.findIndex(
      (object) => object.id === itemToRemove.id
    );
    if (itemID !== -1) {
      // eslint-disable-next-line no-unused-vars
      cartCopy.splice(itemID, 1);
      //   setCartItems((cartCopy)); >> DOESN'T TRIGGER REFRESH FROM STATE
      setCartItems(() => [...cartCopy]);
    }
  };

  const numberOfItemsInCart = cartItems.length || 0;

  return (
    <Context.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        numberOfItemsInCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ContextProvider, Context };
