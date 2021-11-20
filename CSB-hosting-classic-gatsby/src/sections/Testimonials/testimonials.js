import team1 from "assets/images/testimonials/team/team-1.jpg";
import team2 from "assets/images/testimonials/team/team-2.jpg";
import team3 from "assets/images/testimonials/team/team-3.jpg";
import team4 from "assets/images/testimonials/team/team-4.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import React from "react";
import "./Testimonials.css";
function Testimonials() {
  return (
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Why Choose Tech Master GoGo?</h2>
          <p>Are we liked? Listen to our customers!</p>
        </header>

        <div class="row gy-4">
          <div
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="member">
              <div class="member-img">
                <img src={team1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Shweta Das</h4>
                <span>Client</span>
                <p>
                  They’ve just been outstanding asset. I Loved working with
                  them. The team was so cooperative and helpful. I was
                  overburdened handling my social media platforms but they
                  managed it so well.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="member">
              <div class="member-img">
                <img src={team2} class="img-fluid" alt="" />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Akansha Jha</h4>
                <span>Client</span>
                <p>
                  They’ve met my every goal and expectation. The ideas presented
                  by them were really helpful to set us apart from the
                  competitors. Helped us achieve a lot more than what we
                  expected.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="member">
              <div class="member-img">
                <img src={team3} class="img-fluid" alt="" />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Aman Kumar </h4>
                <span>Client</span>
                <p>
                  Definitely changed my thoughts into reality. Amazing
                  dedication and hard work. Their flexibility and ability to
                  understand client’s demand is great. They understand
                  meaningful marketing .
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="member">
              <div class="member-img">
                <img src={team4} class="img-fluid" alt="" />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Akash Kumar </h4>
                <span>Client</span>
                <p>
                  I was amazed by their quality of service. The team is filled
                  with energy and enthusiasm. The strategies and creativity
                  helped us reach a whole new bar in the marketplace. Enjoyed
                  working with them
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
