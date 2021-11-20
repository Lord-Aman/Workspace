import React from "react";
import "./SeoManagement.css";
import homeImg from "./SeoManagementImages/home-img.png";
import fIcon1 from "./SeoManagementImages/f-icon1.svg";
import fIcon2 from "./SeoManagementImages/f-icon2.svg";
import fIcon3 from "./SeoManagementImages/f-icon3.svg";
import AboutImg from "./SeoManagementImages/about-img.svg";
import { Link } from "../../components/link";

import Pic1 from "./SeoManagementImages/pic1.png";
import Pic3 from "./SeoManagementImages/pic3.png";
import Pic7 from "./SeoManagementImages/pic7.png";
import Pic4 from "./SeoManagementImages/pic4.png";
import Pic8 from "./SeoManagementImages/pic8.png";
import Pic5 from "./SeoManagementImages/pic5.png";
import Pic6 from "./SeoManagementImages/pic6.png";
import Pic9 from "./SeoManagementImages/pic9.png";
import Pic10 from "./SeoManagementImages/pic10.png";

function SeoManagement() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
            Who Said SEO Is Traffic? <span>It Is No Less Than Magic! </span>
            </h3>
            <p>
            The Only Traffic We Love Getting Stuck In. It Is Not Hard To Believe that 93% Users Don’t Scroll To Second Page Of Google Results. 
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
            <img src={Pic10} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS"> SEO CHATTER ! </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={Pic5} alt="" />
              <h3>Best View Everywhere</h3>
              <p>
              High Quality Is Preferred Despite Of The Platform It’s Viewed On. The Structure, Page Speed, And Local SEO Captures Response. Provide The Best To Stand Apart From The Rest. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic6} alt="" />
              <h3>SEO Optimized  </h3>
              <p>
              Use Tools like Ahrefs and Google Keyword Tool to Jot Down At least 10 Words Related to Your Brand or Product. Check their Search Volume and Competition to Come up With Ideas That Can Boost Your Business. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic8} alt="" />
              <h3>Start Blogging </h3>
              <p>
              Writing Blogs is an Efficient Way to Rank On Search Engine Pages. Placing the Proper Keywords and Engaging Your Website’s Users Is An Amazing Way To Get Your Brand Known To Others.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic4} alt="" />
              <h3> Stay Updated </h3>
              <p>
              Market Is Ever Evolving, Make Sure To Accompany That. Various Online Resources Can Help You Know Top Trends To Stay Updated. SEO Is What Matters To Get Your Company What It Needs. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS">
            {" "}
            PLAN YOUR BUSINESS GOALS{" "}
          </h1>

          <div className="column">
            <div className="image">
              <img src={Pic9} alt="" />
            </div>

            <div className="content">
              <h3>Get Ranked, Get Visible  </h3>
              <p>
              The Process Of Ranking Can Be Daunting. Stuffing Your Page With Keywords To Attract Traffic Will Not Help You In The Long Run. Google No Longer Ranks The Web Pages With Highest Keyword Density. 
              </p>
              <p>
              Don’t Worry, We Will Help You Address Your Business Goals. Our Highly Skilled Team Is Fully Efficient In Increasing Your Customer Acquisition For Greater Marketing And Success.
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
                  loading time significantly.
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

export default SeoManagement;
