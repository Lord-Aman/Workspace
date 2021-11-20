import React from "react";
import Logo from "../../assets/Logo/LogoTransparent.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header id="header" class="fixed-top">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <h1 class="logo me-auto me-lg-0">
          <a href="index.html">Kelly</a>
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
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="resume.html">Resume</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
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

export default Navbar;
