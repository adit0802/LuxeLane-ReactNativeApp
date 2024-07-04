import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
const EMPTY_CART = "EMPTY_CART";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const updatedCart = state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case INCREMENT_QUANTITY: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    case DECREMENT_QUANTITY: {
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    case EMPTY_CART: {
      return [];
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
