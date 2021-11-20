import React, { Component } from "react";
import Logo from "../../assets/Logo/LogoWhite.png";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    let navToggle = document.querySelector(".nav__toggle");
    let navWrapper = document.querySelector(".nav__wrapper");

    navToggle.addEventListener("click", function () {
      if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
      } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
      }
    });
  }
  render() {
    return (
      <header class="site-header">
        <div class="wrapper site-header__wrapper">
          <a href="#" class="brand">
            <img src={Logo} alt="okidz Logo" />
          </a>
          <nav class="nav">
            <button class="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul class="nav__wrapper">
              <li class="nav__item">
                <a href="#">Home</a>
              </li>
              <li class="nav__item">
                <a href="#">About</a>
              </li>
              <li class="nav__item">
                <a href="#">Services</a>
              </li>
              <li class="nav__item">
                <a href="#">Hire us</a>
              </li>
              <li class="nav__item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
