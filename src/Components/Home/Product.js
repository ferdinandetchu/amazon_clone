import React, { useContext } from "react";
import "./Product.css";
import { BasketContext } from "../../data.js";

function Product({ title, image, price, rating, id }) {
  const { basket, dispatch } = useContext(BasketContext);
  // const [state, dispatch] = useReducer(reducer, basket);
  function addToBasket(item) {
    // console.log(item);
    dispatch({ type: "ADDTOBASKET", item: item });
  }
  // console.log(basket);
  // const [state, dispach] = useStateValue;

  // const addToBasket = () => {
  //     dispach the item into the data layer
  //     dispach({
  //         type: 'ADD_TO_BASKET',
  //         item: {
  //             id: id,
  //             title: title,
  //             image: image,
  //             price: price,
  //             rating: rating
  //         }
  //     })
  // }

  return (
    <div className="home__product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#9733;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button
        onClick={() =>
          addToBasket({
            title: title,
            image: image,
            price: price,
            rating: rating,
            id: id,
          })
        }
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
