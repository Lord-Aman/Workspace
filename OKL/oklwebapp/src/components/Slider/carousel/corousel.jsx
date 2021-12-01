import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../Banner1/Banner1";
import Banner2 from "../Banner2/Banner2";
// import Banner2 from "../Banner2";
import Banner3 from "../Banner3";

import "./carousel.css";

const Corousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Banner1 />
      </Carousel.Item>
      {/* <Carousel.Item>
        <Banner2 />
      </Carousel.Item> */}
      <Carousel.Item>
        <Banner3 />
      </Carousel.Item>
    </Carousel>
  );
};

export default Corousel;
