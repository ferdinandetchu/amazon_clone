import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import { BasketContext, reducer } from "./data.js";
import Structure from "./Components/Structure";
// import { Outlet, Link } from "react-router-dom";

function App() {
  const [basket, dispatch] = useReducer(reducer, []);
  return (
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
  );
}

export default App;
