import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer, useState } from "react";
import {
  BasketContext,
  reducer,
  UserContext,
  ProductsContext,
} from "./data.js";
import Structure from "./Components/Structure";
// import { Outlet, Link } from "react-router-dom";

function App() {
  const [basket, dispatch] = useReducer(reducer, []);
  const [user, setUser] = useState();
  const [products, setProducts] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <BasketContext.Provider value={{ basket, dispatch }}>
          <BrowserRouter className="App">
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Structure />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>
              <Route path="/auth/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </BasketContext.Provider>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
