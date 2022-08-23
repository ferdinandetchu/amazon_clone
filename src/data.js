import { Podcasts } from "@mui/icons-material";
import { createContext } from "react";
const data = {
  store: [
    {
      id: "1",
      title: "The learn startup",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 2,
    },
    {
      id: "2",
      title: "The second component",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 4,
    },
    {
      id: "3",
      title: "The second component",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 5,
    },
    {
      id: "4",
      title: "The second component",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 5,
    },
    {
      id: "5",
      title: "The second component",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 5,
    },
    {
      id: "6",
      title: "The second component",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 5,
    },
    {
      id: "7",
      title: "The second component",
      price: 19.99,
      image:
        "https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200",
      rating: 5,
    },
  ],
  bocket: [],
};

// async function products() {
//   return await fetch("https://fakestoreapi.com/products").then(res =>
//     res.json()
//   );
// }

// async function getProducts() {
//   let products = await fetch("https://fakestoreapi.com/products");
//   products.json();
//   console.log(products);
// }
// getProducts();
// let product = products();
// console.log(product);
export const BasketContext = createContext();

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

export default data;
