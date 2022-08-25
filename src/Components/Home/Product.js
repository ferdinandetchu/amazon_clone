import React, { useContext } from "react";
import "./Product.css";
import { BasketContext } from "../../data.js";

function Product({ product }) {
  const { basket, dispatch } = useContext(BasketContext);
  function addToBasket(item) {
    dispatch({ type: "ADDTOBASKET", item: item.product });
  }

  return (
    <div className="home__product">
      <div className="product__info">
        <p>{product.title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>

        <div className="product__rating">
          {Array(Math.round(product.rating.rate))
            .fill()
            .map((_, i) => (
              <p key={i}>&#9733;</p>
            ))}
        </div>
      </div>

      <img src={product.image} alt="" />

      <button onClick={() => addToBasket({ product })}>Add to Basket</button>
    </div>
  );
}

export default Product;
