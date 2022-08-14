import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import data, { BasketContext, reducer } from "./data.js";
// import { Outlet, Link } from "react-router-dom";

function App() {
  const [basket, dispatch] = useReducer(reducer, []);
  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      <BrowserRouter className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;
