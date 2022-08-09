
import './App.css';
import Header from './Components/Header';
import Home from "./Pages/Home/Home";
import Checkout from './Pages/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// import { Outlet, Link } from "react-router-dom";

function App() {
  return (
      <BrowserRouter className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
