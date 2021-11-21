import React, { Component } from "react";
import Logo from "../../assets/Logo/LogoTransparent.png";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    const hamburger = document.querySelectorAll(".navbar .dropdown > a");

    document.querySelector(".dropdown > a").addEventListener("click", (e) => {
      console.log("Hamburger Clicked");
    });
  }

  render() {
    return (
      <header id="header" class="fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <h1 class="logo me-auto me-lg-0">
            <a href="index.html">
              <img src={Logo} alt="Okidz Logo" />
            </a>
          </h1>
          <a href="index.html" class="logo">
            <img src="assets/img/logo.png" alt="" class="img-fluid" />
          </a>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Creators</a>
              </li>
              <li>
                <a href="#">Activities for Kids</a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="header-social-links">
            <a href="#" class="twitter">
              <i class="bi bi-twitter" />
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook" />
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram" />
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
