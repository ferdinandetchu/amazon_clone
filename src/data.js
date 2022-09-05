import { createContext } from "react";
import axios from "axios";
export const BasketContext = createContext();
export const UserContext = createContext();
export const ProductsContext = createContext();

const app = axios;

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

export let productData = null;
async function getProducts() {
  let res = await app.get("https://fakestoreapi.com/products");
  productData = res.data;
  // console.log(productData);
}

getProducts();
// console.log(productData);

export const productsReducer = (products, action) => {
  switch (action.type) {
    case "FILTERBYPRICE":
      return productData.filter(product => product.price >= action.price);
    case "FILTERBYRATE":
      // console.log(parseInt(action.rate));
      if (action.rate === 0) {
        return [...productData];
      } else {
        return productData.filter(
          state => Math.round(state.rating.rate) === action.rate
        );
      }
    default:
      return products;
  }
};
