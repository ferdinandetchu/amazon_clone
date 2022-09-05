import React, { useContext } from "react";
import "./Product.css";
import { BasketContext } from "../../data.js";

function Product({ product }) {
  const { basket, dispatch } = useContext(BasketContext);
  function addToBasket(item) {
    dispatch({ type: "ADDTOBASKET", item: item.product });
    // console.log(item.product);
    // const jsonBasket = JSON.stringify(basket);
    // localStorage.setItem("basket", jsonBasket);
  }

  return (
    <div className="home__product">
      <div className="home__product__info">
        <p>{product.title}</p>

        <p className="home__product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>

        <div className="home__product__rating">
          {Array(Math.round(product.rating.rate))
            .fill()
            .map((_, i) => (
              <p key={i}>&#9733;</p>
            ))}
        </div>
      </div>

      {/* <img src={product.image} alt="" /> */}
      <div
        className="home__product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>

      <button onClick={() => addToBasket({ product })}>Add to Basket</button>
    </div>
  );
}

export default Product;
