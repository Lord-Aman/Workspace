import React from "react";
import "./WebDevelopment.css";
import homeImg from "./WebDevImages/home-img.png";
import fIcon1 from "./WebDevImages/f-icon1.svg";
import fIcon2 from "./WebDevImages/f-icon2.svg";
import fIcon3 from "./WebDevImages/f-icon3.svg";
import AboutImg from "./WebDevImages/about-img.svg";
import HTML from "./WebDevImages/html.png";
import CSS from "./WebDevImages/css.png";
import JS from "./WebDevImages/js.png";
// import D3 from "./WebDevImages/d3.png";
import REACT from "./WebDevImages/react.png";
import VUE from "./WebDevImages/vuejs.png";
import Pic1 from "./WebDevImages/pic1.png";
import Pic3 from "./WebDevImages/pic3.png";
import { Link } from "../../components/link";
function WebDevelopment() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              Your Website is Like <span> Your PR team </span>
            </h3>
            <p>
              Attracts visitiors , Guides them to Your Services and promotes You
              24*7
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
            <img src={homeImg} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS"> Your Website’s Beauty is Our Duty! </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={fIcon1} alt="" />
              <h3>Looks Matter!</h3>
              <p>
                Your Design creates “First Impression” in your Audience. Make
                sure to WOW them. We produce Designs that Make People Stop and
                Stare.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>Soft and Smooth Animations </h3>
              <p>
                What you SEE is What you SELL! Animation is like your love for
                Coffee, goes to infinity and beyond. We turn Animation into
                Powerful Communication.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>Friendly Interactions</h3>
              <p>
                It’s Easy to be Complicated than to be Simple. A Convenient
                Navigation Page delivers your message efficiently. We help you
                Build Relationship with your Audience.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={fIcon3} alt="" />
              <h3>Optimized for Mobile </h3>
              <p>
                Your website should Look Good on any Platform. The Users of
                Smartphone are increasing exponentially, We help Improve your
                Visitor’s Experience.
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
              <img src={AboutImg} alt="" />
            </div>

            <div className="content">
              <h3>Create Websites That Sell </h3>
              <p>
                The Vital Ingredient of a Great Website is to generate hunger
                for What’s More! The Audience isn’t interested in “What You
                Provide them” but in
              </p>
              <p>
                “How You Provide Them”. More than 90% people credited fonts,
                design, and structure to be the “Instant Connection” for them.
                Don’t worry! Your Website’s Beauty is now Our Duty. We deliver
                Top-notch services with the Finest Technology for you to be The
                Best Player in Market. Our Highly Skilled Team helps address
                both your planned and unplanned needs with great efficiency.
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
        <section className="techCSS">
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
        </section>
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
                  loading time significantly .
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

export default WebDevelopment;
