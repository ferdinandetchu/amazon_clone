import React, { useContext } from "react";
import "./Product.css";
import { BasketContext } from "../../data.js";

function Product({ title, image, price, rating, id }) {
  const { basket, dispatch } = useContext(BasketContext);

  function removeFromBasket(id) {
    // dispach the item into the data layer
    dispatch({ type: "REMOVEFROMBASKET", id: id });
    // console.log(id);
  }
  if (id) {
    return (
      <div className="product">
        <img src={image} alt="" />
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
          <button onClick={() => removeFromBasket(id)}>
            Remove from Basket
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
