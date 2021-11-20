import React from "react";
import "./AppDevelopment.css";

import HTML from "./AppDevImages/html.png";
import CSS from "./AppDevImages/css.png";
import JS from "./AppDevImages/js.png";
// import D3 from "./AppDevImages/d3.png";
import REACT from "./AppDevImages/react.png";
import VUE from "./AppDevImages/vuejs.png";
import Pic1 from "./AppDevImages/pic1.png";
import Pic3 from "./AppDevImages/pic3.png";
import Pic11 from "./AppDevImages/pic11.png";
import Pic12 from "./AppDevImages/pic12.png";
import Pic13 from "./AppDevImages/pic13.png";
import Pic14 from "./AppDevImages/pic14.png";
import Pic15 from "./AppDevImages/pic15.png";
import Pic16 from "./AppDevImages/pic16.png";
import { Link } from "../../components/link";

function AppDevelopment() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              one tap away from <span> your Dream Business Growth </span>
            </h3>
            <p>
              We Deliver Digital Transformation to Enable Your Business Anytime,
              Anywhere!
            </p>
            <a href="#" className="btnACSS">
              <Link
                path="/contactus"
                label="Contact Us"
                style={{ color: "#fff" }}
              ></Link>
            </a>
          </div>

          <div className="image">
            <img src={Pic11} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS">Mobile App Design </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={Pic13} alt="" />
              <h3>URGENT ATTENTION </h3>
              <p>
                We Design Apps which are Platform Friendly. Catering the Design
                of Mobile App, We Ensure User-Experience is Seamless and
                Effortless. .
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic14} alt="" />
              <h3> Mobile App Development </h3>
              <p>
                We are Well Versed from Website-to-App Conversion to Inventive
                Concept Understanding; From Refactoring of your Prevailing Code
                to Blank-Slate App Development.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic15} alt="" />
              <h3>Mobile App Evolution </h3>
              <p>
                TechMasterGoGo is always eager to help your App Grow by
                Perfection, Intensifying its Functionality According to your
                Direction, and Presenting leading-edge Mobile Experiences.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic16} alt="" />
              <h3>UX/UI Design </h3>
              <p>
                We Expertise From Innovative Thinking to Final Polish, Our UX/UI
                Design Development Emphases on Generating User-centric Mobile
                Solutions that Enhance Brand Reputation.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> Website Development service </h1>

          <div className="column">
            <div className="image">
              <img src={Pic12} alt="" />
            </div>

            <div className="content">
              <h3>Secret Sauce Of Great APP </h3>
              <p>
                An Increase of 20% Every Year has been Recorded for App Usage.
                From Significant Number of Users to Being Easily Accessible,
                Mobile APP holds the Future.
              </p>
              <p>
                As Professionals at Developer, Apps hold the Capacity to Build
                Cross-Platform Mobile Applications that work on any Device or
                Platform. Custom Mobile Application Development Requirements is
                Assured. The Final Deliverable, No Matter the Expertise its
                Built on, Will be Safe, Scalable and Supportable in Whatsoever
                Situation its Hosted.
              </p>
              <div className="buttons">
                <Link path="/contactus" label="">
                  <a href="/contactus" className="btnACSS">
                    {" "}
                    Contact Us{" "}
                  </a>
                </Link>
                <Link path="/" label="">
                  <a href="/" className="btnACSS">
                    {" "}
                    home{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="techACSS">
          <h1 className="headingACSS1">technology We Use</h1>
          <div className="box-containerACSS">
            <div className="box">
              <div className="col">
                <img src={HTML} />
              </div>
              <div className="col">
                <img src={CSS} />
              </div>
              <div className="col">
                <img src={REACT} />
              </div>
              <div className="col">
                <img src={JS} />
              </div>

              <div className="col">
                <img src={VUE} />
              </div>
              {/* <div className="col">
                <img src={D3} />
              </div> */}
            </div>
          </div>
        </div>

        <section class="reviewACSS sectionCSS" id="reviewACSS">
          <h1 class="headingACSS1"> people's review </h1>

          <div class="box-containerACSS">
            <div class="box">
              <div class="userACSS">
                <img src={Pic1} alt="" />
                <h3>Murshida Afrin</h3>

                <div class="comment">
                  Impressed with their service quality and working strategy.
                  They have a dedicated team to ensure all your needs. Loved
                  working with them. So attractive and easy to use, reduced the
                  loading time.
                </div>
              </div>
            </div>

            {/* <div class="box">
              <div class="userACSS">
                <img src={Pic2} alt="" />
                <h3>john deo</h3>

                <div class="comment">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus et, perspiciatis nisi tempore aspernatur accusantium
                  sed distinctio facilis aperiam laborum autem earum repellat,
                  commodi eum. Ullam cupiditate expedita officiis obcaecati?
                </div>
              </div>
            </div>
           
            */}
            <div class="box">
              <div class="userACSS">
                <img src={Pic3} alt="" />
                <h3>Ritish Ghadai</h3>
                <div class="comment">
                  Just at loss of words, I appreciate the eye-tempting designs.
                  The new site is absolutely user-friendly. They are created
                  with thorough understanding of what I really wanted.
                  Communication was super-easy, loved it
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AppDevelopment;
