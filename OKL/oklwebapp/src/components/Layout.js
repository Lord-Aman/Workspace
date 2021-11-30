import React from "react";
import Activities from "./Activities/Activities";
import Header from "./Navbar/Header";
import Corousel from "./Slider/carousel/corousel";
import Footer from "./Footer/Footer";
function Layout() {
  return (
    <>
      <Header />
      <Corousel />
      <Activities />
      <Footer />
    </>
  );
}

export default Layout;
