import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css";
import { Link } from "../link";
function footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Tech Master</h3>
              <p>
                203, 2nd Floor, Silver Arc Plaza, <br></br>
                Janjeerwala Square, Near 56 Dukaan,<br></br>
                Indore, Madhya Pradesh - 452001 <br></br>
                <br />
                <strong>Phone:</strong> +91 99931 81660<br></br>
                <strong>Email:</strong> info@techmastergogo.com<br></br>
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a
                    href="https://instagram.com/techmastergogo?utm_medium=copy_link"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a
                    href="https://www.facebook.com/100523885207584/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a
                    href="https://www.linkedin.com/company/tech-master-gogo"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a
                    href="https://twitter.com/TechMasterGogo?s=08"
                    target="_blank"
                  >
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
                  <a href="/webdev">
                    <Link path="/webdev" label="Web Development"></Link>
                  </a>
                </li>

                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/appdev">
                    <Link path="/appdev" label="App Development"></Link>
                  </a>
                </li>

                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/socialmedia">
                    <Link
                      path="/socialmedia"
                      label="Social Media Management"
                    ></Link>
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/graphicdesign">
                    <Link
                      path="/graphicdesign"
                      label="Graphic & Logo Design"
                    ></Link>
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/contentwriting">
                    <Link path="/contentwriting" label="Content Writing"></Link>
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="/leadgeneration">
                    <Link path="/leadgeneration" label="Lead Generation"></Link>
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="videoprod">
                    <Link path="/videoprod" label="Video Production"></Link>
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="seomanagement">
                    <Link path="/seomanagement" label="SEO Management"></Link>
                  </a>
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
                  href="https://twitter.com/TechMasterGogo?s=08"
                  target="_blank"
                  class="twitter"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/100523885207584/"
                  target="_blank"
                  class="facebook"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/techmastergogo?utm_medium=copy_link"
                  target="_blank"
                  class="instagram"
                >
                  <i class="fab fa-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/tech-master-gogo"
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
            <span>Tech Master Gogo</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default footer;
