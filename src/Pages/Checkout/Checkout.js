import React, { useContext } from "react";
import "./Checkout.css";
import Subtotal from "../../Components/Checkout/Subtotal";
import Product from "../../Components/Checkout/Product";
import { BasketContext } from "../../data.js";

function Checkout() {
  const basket = useContext(BasketContext);
  // console.log(basket.basket);
  // let storeItems = data.bocket;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shoping Basket</h2>
          {basket.basket.length > 0 ? (
            basket.basket.map(item => (
              <Product
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                id={item.id}
              />
            ))
          ) : (
            <p>No Product Is Added To Basket Yet</p>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
