import React from "react";
import Activities from "./Activities/Activities";
import Header from "./Navbar/Header";
import Corousel from "./Slider/carousel/corousel";

function Layout() {
  return (
    <>
      <Header />
      <Corousel />
      <Activities />
    </>
  );
}

export default Layout;
