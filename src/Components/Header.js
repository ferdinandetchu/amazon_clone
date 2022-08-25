import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
// import "./Product.css";
import { getAuth, signOut } from "firebase/auth";
import { BasketContext, UserContext } from "../data.js";
import { app } from "../firebase.js";
import userEvent from "@testing-library/user-event";

function Header() {
  const { user } = useContext(UserContext);
  const { basket } = useContext(BasketContext);
  // console.log(user);
  // function signOutUser() {
  //   // e.preventDefault();
  //   const auth = getAuth(app);
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       alert("Succefully Sign-out");
  //     })
  //     .catch(error => {
  //       // An error happened.
  //     });
  // }
  // console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello {user == undefined ? "Guest" : user.email}
          </span>
          {user == undefined ? (
            <Link className="basket__link" to="/auth/login">
              <span className="header__optionLineTwo">Sign IN</span>
            </Link>
          ) : (
            <span
              className="header__optionLineTwo sign__out__user"
              // onClick={signOutUser()}
            >
              Sign Out
            </span>
          )}
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link className="basket__link" to="/checkout">
          <div>
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
