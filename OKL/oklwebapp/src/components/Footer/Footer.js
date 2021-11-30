import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
function footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>OKidzLabs</h3>
              <p>
                203, 2nd Floor, Silver Arc Plaza, <br></br>
                Lorem Ipsum, Indore, India,<br></br>
                Indore, Madhya Pradesh - 452001 <br></br>
                <br />
                <strong>Phone:</strong> +123 456 789<br></br>
                <strong>Email:</strong> info@okidzlabs.com<br></br>
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a
                    href="https://www.instagram.com/okidzlabs/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="https://www.facebook.com/okidzlabs/" target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a
                    href="https://www.linkedin.com/company/okidzlabs"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="https://twitter.com/Okidzlabs" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/webdev">Activities for Kids</a>
                </li>

                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/appdev">Learning Activities</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/appdev">Projects & Tasks for Kids</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Join and Connect With Us on our Social Profiles to stay updated.
              </p>
              <div class="social-links mt-3">
                <a
                  href="https://twitter.com/Okidzlabs"
                  target="_blank"
                  class="twitter"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/okidzlabs/"
                  target="_blank"
                  class="facebook"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/okidzlabs/"
                  target="_blank"
                  class="instagram"
                >
                  <i class="fab fa-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/okidzlabs"
                  target="_blank"
                  class="linkedin"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container footer-bottom clearfix">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>OKidzLabs</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default footer;
