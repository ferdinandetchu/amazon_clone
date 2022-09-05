import React, { useContext } from "react";
import "./CheckProduct.css";
import { BasketContext } from "../../data.js";

function Product({ product }) {
  const { basket, dispatch } = useContext(BasketContext);

  function removeFromBasket(id) {
    // dispach the item into the data layer
    dispatch({ type: "REMOVEFROMBASKET", id: id });
    const jsonBasket = JSON.stringify(basket);
    // console.log(jsonBasket);
    localStorage.removeItem("basket");
    // console.log(id);
  }
  if (product.id) {
    return (
      <div className="product">
        <div
          className="product__image"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {/* <img src={product.image} alt="" /> */}
        </div>
        <div className="product__info">
          <h4>{product.title}</h4>
          <p>{product.description}</p>

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
          <button onClick={() => removeFromBasket(product.id)}>
            Remove from Basket
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
