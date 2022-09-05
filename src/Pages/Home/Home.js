import React, { useReducer, useState, useContext, useEffect } from "react";
import "./Home.css";
import Product from "../../Components/Home/Product.js";
import Filter from "../../Components/Home/Filter.js";
import { ProductsContext } from "../../data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import { StoreTwoTone } from '@mui/icons-material';

function Home() {
  const { products, dispatchPro } = useContext(ProductsContext);
  // console.log(products);

  return (
    <div className="home">
      <div className="home__Container">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          className="home__image"
        >
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheMeg/THMEG_2020_GWBleedingHero_FT_COVIDUPDATE__XSite_3000X1200_PV_en-GB._CB406968868_.jpg" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src="https://www.newstimes.com.ng/wp-content/uploads/2022/08/amazon-prime-video-231898.jpg" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>

        <div className="home__filter">
          <Filter />
        </div>

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
