import React, { createContext, useReducer } from "react";
import { reducer } from "../Reduser/reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incrementQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
  };

  value.decrementQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ContextProvider;
