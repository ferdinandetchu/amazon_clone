import React, { useReducer, useState, useContext, useEffect } from "react";
import "./Home.css";
import Product from "../../Components/Home/Product";
import { ProductsContext, reducer } from "../../data.js";

// import { StoreTwoTone } from '@mui/icons-material';

function Home() {
  const { products, setProducts } = useContext(ProductsContext);
  // console.log(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home">
      <div className="home__Container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheMeg/THMEG_2020_GWBleedingHero_FT_COVIDUPDATE__XSite_3000X1200_PV_en-GB._CB406968868_.jpg"
          alt="img"
          className="home__image"
        />

        <div className="home__row">
          {products != null ? (
            products.map(item => (
              <Product className="product" key={item.id} product={item} />
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
