import React, { useContext } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { SportsBasketball } from "@mui/icons-material";
import { BasketContext } from "../../data.js";
import { getBasketTotal } from "../../reducer.js";
import { Link } from "react-router-dom";

function Subtotal() {
  const { basket, dispatch } = useContext(BasketContext);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Link to="/auth/login">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
