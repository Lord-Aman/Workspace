import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../banner1";
import Banner2 from "../banner2";
import Banner3 from "../banner3";
import Banner4 from "../banner4";

import "./carousel.css";

const Corousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Banner1 />
      </Carousel.Item>
      <Carousel.Item>
        <Banner2 />
      </Carousel.Item>
      <Carousel.Item>
        <Banner3 />
      </Carousel.Item>
      {/* <Carousel.Item>
        <Banner4 />
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Corousel;