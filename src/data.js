import { createContext } from "react";

export const BasketContext = createContext();
export const UserContext = createContext();
export const ProductsContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOBASKET":
      // console.log(action.item);
      return [...state, action.item];
    case "REMOVEFROMBASKET":
      //   console.log(action.id);
      return state.filter(state => state.id != action.id);
    default:
      return "state";
  }
};
