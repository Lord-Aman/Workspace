import React from "react";
import Logo from "../../assets/Logo/LogoWhite.svg";
import "./Header.css"
function Header() {
  return (
    <div className="navContainer">
      <div className="logo" href="/">
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
      <div className="header-social">
      <a
              href="https://twitter.com/Okidzlabs"
              target="_blank"
              class="twitter"
              className="header-social-links"
            >
              <i class="bi bi-twitter" />
            </a>
            <a
              href="https://www.facebook.com/okidzlabs/"
              target="_blank"
              class="facebook"
              className="header-social-links"
            >
              <i class="bi bi-facebook" />
            </a>
            <a
              href="https://www.instagram.com/okidzlabs/"
              target="_blank"
              class="instagram"
              className="header-social-links"
            >
              <i class="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/okidzlabs"
              target="_blank"
              class="linkedin"
              className="header-social-links"
            >
              <i class="bi bi-linkedin" />
            </a>
      </div>
    </div>
  );
}


export default Header;
