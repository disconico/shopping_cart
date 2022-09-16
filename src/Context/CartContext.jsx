import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import data from '../assets/productsData';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const products = data;

  // Init empty cart //
  useEffect(() => {
    const emptyCart = products.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        itemPrice: obj.price,
        quantity: 2,
      };
    });
    setCartItems(emptyCart);
  }, []);

  // Update number of items in cart //
  useEffect(() => {
    let newTotalProduct = 0;
    cartItems.map((obj) => {
      return (newTotalProduct = obj.quantity + newTotalProduct);
    });
    setTotalProducts(() => newTotalProduct);
  }, [cartItems]);

  // Update total price //
  useEffect(() => {
    let newTotalPrice = 0;
    cartItems.map((obj) => {
      return (newTotalPrice = newTotalPrice + obj.quantity * obj.itemPrice);
    });
    setTotalPrice(() => newTotalPrice);
  }, [cartItems]);

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
    console.log(cartItems);
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

  // const emptyCart = () => {
  //   setCartItems([]);
  // };

  return (
    <Context.Provider
      value={{
        products,
        cartItems,
        addItemToCart,
        // removeItemFromCart,
        removeAllOfThisItem,
        // emptyCart,
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
