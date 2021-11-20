import React from "react";
import "./VideoProduction.css";

import Pic1 from "./VideoProductionImages/pic1.png";
import Pic3 from "./VideoProductionImages/pic3.png";
import { Link } from "../../components/link";

import Pic13 from "./VideoProductionImages/pic13.png";
import Pic14 from "./VideoProductionImages/pic14.png";
import Pic15 from "./VideoProductionImages/pic15.png";
import Pic17 from "./VideoProductionImages/pic17.png";
import Pic18 from "./VideoProductionImages/pic18.png";
import Pic19 from "./VideoProductionImages/pic19.png";
import Pic20 from "./VideoProductionImages/pic20.png";
import Pic21 from "./VideoProductionImages/pic21.png";
import Pic22 from "./VideoProductionImages/pic22.png";
import Pic23 from "./VideoProductionImages/pic23.png";
import Pic24 from "./VideoProductionImages/pic24.png";
import Pic25 from "./VideoProductionImages/pic25.png";
// import Pic26 from "./VideoProductionImages/pic26.png";
import Pic26 from "./VideoProductionImages/pic26.jpg";
import Pic27 from "./VideoProductionImages/pic27.jpg";

function VideoProduction() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              VIDEO AND <span> ANIMATION</span>
            </h3>
            <h1>
              BUILDS VISUAL<span> FOUNDATION </span>
            </h1>
            <p>
              Video Boosts Sales to a Great Extent. Promotes your Brand at
              Places You Can’t Reach. It’s not the Product YOU SELL but the
              Story You TELL!
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
            <img src={Pic13} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS"> WE CREATE </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={Pic25} alt="" />
              <h3>Real Estate Video Services</h3>
              <p>
                It is believed that Videography helps rise Offers and Requests
                from Potential Clients. Video puts a face to the Brand, which
                Elevate Sales.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic14} alt="" />
              <h3>Commercial/Advertising Video Services</h3>
              <p>
                92% B2B prospects consume Online Video. A Commercial helps you
                Convey Audience Why Your Product Is Best from The Rest.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic23} alt="" />
              <h3>Promotional Documentary Video Services</h3>
              <p>
                A Promotional Video makes a Better Impression of Your Product.
                It adds Value & Life in Your Brand.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic24} alt="" />
              <h3>Corporate Video Services</h3>
              <p>
                Communication of Your Brand is Crucial than Sales. Nobody
                Purchase Essential Goods From Unknown Sites.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic22} alt="" />
              <h3>Educational Video Services</h3>
              <p>
                The Most Visited YouTube Pages are of Educational Channels.
                Video Formatting has helped Students Learn Faster Thus Increased
                its Demand to Several Folds
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic21} alt="" />
              <h3>Social Media Video Services</h3>
              <p>
                Video allows to Concise and Capture User’s Interest in Seconds.
                The Short Videos on Social Media are easily Digestible which
                Makes People Want It More.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> Video Production service </h1>

          <div className="column">
            <div className="image">
              <img src={Pic14} alt="" />
            </div>

            <div className="content">
              <h3>VIDEOS That Tell You A STORY </h3>
              <p>
                It is No Secret that 5 Billion YouTube Videos are Being Watched
                On a Daily Basis. People have Started to Watch More and Read
                Less. Video Outperforms any other Marketing Tools.
              </p>
              <p>
                Don’t Worry, We Create Amazing Videos Across all Departments!
                Our Strong Marketing Strategy with Brilliant Scriptwriting and
                Storytelling Services helps Script, Shoot, Edit, Produce & Share
                your Video Widely and Supports Marketing Goals
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
                <img src={Pic15} />
              </div>
              <div className="col">
                <img src={Pic18} />
              </div>
              <div className="col">
                <img src={Pic17} />
              </div>
              <div className="col">
                <img src={Pic20} />
              </div>
              <div className="col">
                <img src={Pic19} />
              </div>
            </div>
          </div>
        </div>

        <section class="reviewACSS sectionCSS" id="reviewACSS">
          <h1 class="headingACSS1"> people's review </h1>

          <div class="box-containerACSS">
            <div class="box">
              <div class="userACSS">
                <img src={Pic26} alt="" />
                <h3>Anamica Bezofs</h3>

                <div class="comment">
                  They’ve Met My Every Goal And Expectation. The Ideas Presented
                  By Them Were Really Helpful To Set Us Apart From The
                  Competitors. Helped Us Achieve A Lot More Than What We
                  Expected.
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
                <img src={Pic27} alt="" />
                <h3>Joe Biden</h3>

                <div class="comment">
                  I Was Amazed By Their Quality Of Service. The Team Is Filled
                  With Energy And Enthusiasm. The Strategies And Creativity
                  Helped Us Reach A Whole New Bar In The Marketplace. Enjoyed
                  Working With Them
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default VideoProduction;
