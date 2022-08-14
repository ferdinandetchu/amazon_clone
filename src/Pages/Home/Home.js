import React, { useReducer } from "react";
import "./Home.css";
import Product from "../../Components/Home/Product";
import data from "../../data.js";
import { reducer } from "../../data.js";

// import { StoreTwoTone } from '@mui/icons-material';

function Home() {
  let storeItems = () => {
      return [data.store[0], data.store[1]];
    },
    storeItems2 = () => {
      return [data.store[2], data.store[3], data.store[4]];
    },
    storeItems3 = () => {
      return [data.store[5]];
    },
    storeItems4 = () => {
      return data.store;
    };
  // console.log("Data: ", data.store, "storeItems: ", storeItems4());
  return (
    <div className="home">
      <div className="home__Container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheMeg/THMEG_2020_GWBleedingHero_FT_COVIDUPDATE__XSite_3000X1200_PV_en-GB._CB406968868_.jpg"
          alt="img"
          className="home__image"
        />

        <div className="home__row">
          {storeItems().map(item => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              id={item.id}
            />
          ))}
        </div>

        <div className="home__row">
          {storeItems2().map(item => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              id={item.id}
            />
          ))}
        </div>

        <div className="home__row">
          {storeItems3().map(item => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              id={item.id}
            />
          ))}
        </div>
        <div className="home__row">
          {storeItems4().map(item => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
