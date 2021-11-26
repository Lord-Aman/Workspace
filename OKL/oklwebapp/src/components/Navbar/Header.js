import React from "react";
import Logo from "../../assets/Logo/LogoWhite.svg";
import "./Header.css"
function Header() {
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={Logo} className="logoImage" alt="LogoImage" />
        <h1  className="logoHeader">OKidzLabs</h1>
      </div>
      <div className="navContent">
        <ul className="navList">
          <li>
            <a className="navLinks" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navLinks" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a className="navLinks" href="#">
              Meet the Creators
            </a>
          </li>
          <li>
            <a className="navLinks" href="#">
              Activities for Kids
            </a>
          </li>
        </ul>
      </div>
      <div className="social"></div>
    </div>
  );
}


export default Header;
