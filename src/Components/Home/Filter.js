import React, { useContext, useState } from "react";
import "./Filter.css";
import { ProductsContext } from "../../data.js";

function Filter() {
  const { products, dispatchPro } = useContext(ProductsContext);
  let maxPrice = products.map(product => product.price);
  const [range, setRange] = useState("");
  maxPrice = Math.max(...maxPrice);
  // maxPrice = Math.ceil(maxPrice);

  function filterByRating(e) {
    e.preventDefault();
    dispatchPro({ type: "FILTERBYRATE", rate: Number(e.target.value) });
  }
  function filterByPrice(e) {
    e.preventDefault();
    setRange(`$ ${e.target.value}`);
    dispatchPro({ type: "FILTERBYPRICE", price: Number(e.target.value) });
  }

  return (
    <div className="filter__container">
      <h3>Filter Products</h3>
      <div className="vertical__line"></div>
      <label htmlFor="Price">Price</label>
      <span style={{ padding: "10px" }}>{range == "0" ? "" : range}</span>
      <span className="price__start">$0</span>
      <input
        type="range"
        min="0"
        max={maxPrice}
        // value="50"
        className="slider"
        id="myRange"
        onChange={e => filterByPrice(e)}
      />
      <span className="price__end">${maxPrice}</span>

      <label htmlFor="rating">Ratings</label>
      <select name="rating" id="rating" onChange={e => filterByRating(e)}>
        <option value={0}>Select a rate to filter</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      {/* <input type="text" /> */}
    </div>
  );
}

export default Filter;
