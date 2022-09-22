import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import data from '../assets/productsData';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const initCart = data.map((obj) => {
    return {
      id: obj.id,
      name: obj.name,
      itemPrice: obj.price,
      img: obj.img,
      light: obj.light,
      quantity: 0,
      purify: obj.purify,
      beginner: obj.beginner,
      petFriendly: obj.petFriendly,
    };
  });
  const [cartItems, setCartItems] = useState(initCart);
  const products = data;

  const totalProducts = cartItems.reduce(function (acc, obj) {
    return acc + parseInt(obj.quantity);
  }, 0);

  const totalPrice = cartItems.reduce(function (acc, obj) {
    return acc + parseInt(obj.quantity * obj.itemPrice);
  }, 0);

  const addItemToCart = (item, newQuantity) => {
    const updatedCart = [];
    cartItems.map((product) => {
      if (product.id === item.id) {
        updatedCart.push({ ...item, quantity: newQuantity });
        return updatedCart;
      } else {
        updatedCart.push(product);
        return updatedCart;
      }
    });
    setCartItems(() => updatedCart);
  };

  const removeAllOfThisItem = (item) => {
    const updatedCart = [];
    cartItems.map((product) => {
      if (product.id === item.id) {
        updatedCart.push({ ...item, quantity: 0 });
        return updatedCart;
      } else {
        updatedCart.push(product);
        return updatedCart;
      }
    });
    setCartItems(() => updatedCart);
  };

  // const updateQuantity = (productID) => {
  //   setCartItems((prevState) => {
  //     const newState = prevState.map((obj) => {
  //       if (obj.id === productID) {
  //         return { ...obj, quantity: obj.quantity + 1 };
  //       }
  //       return obj;
  //     });
  //     return newState;
  //   });
  // };

  // const removeItemFromCart = (itemToRemove) => {
  //   const cartCopy = cartItems;
  //   const itemID = cartCopy.findIndex(
  //     (object) => object.id === itemToRemove.id
  //   );
  //   if (itemID !== -1) {
  //     // eslint-disable-next-line no-unused-vars
  //     cartCopy.splice(itemID, 1);
  //     //   setCartItems((cartCopy)); >> DOESN'T TRIGGER REFRESH FROM STATE
  //     setCartItems(() => [...cartCopy]);
  //   }
  // };

  const emptyCart = () => {
    setCartItems(() => initCart);
  };

  return (
    <Context.Provider
      value={{
        products,
        cartItems,
        addItemToCart,
        // removeItemFromCart,
        removeAllOfThisItem,
        emptyCart,
        totalProducts,
        totalPrice,
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
