// WishlistContext.js
import React, { createContext, useReducer } from "react";

const initialState = {
  wishlist: [],
};

const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WishlistReducer, initialState);

  return (
    <WishlistContext.Provider value={{ wishlist: state.wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
