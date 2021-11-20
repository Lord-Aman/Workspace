import React from "react";
import "./LeadGeneration.css";


import HTML from "./LeadGenerationImages/html.png";
import CSS from "./LeadGenerationImages/css.png";
import JS from "./LeadGenerationImages/js.png";
// import D3 from "./LeadGenerationImages/d3.png";
import REACT from "./LeadGenerationImages/react.png";
import VUE from "./LeadGenerationImages/vuejs.png";
import Pic1 from "./LeadGenerationImages/pic1.jpg";
import Pic2 from "./LeadGenerationImages/pic2.jpg";
import { Link } from "../../components/link";
import Pic4 from "./LeadGenerationImages/pic4.png";
import Pic5 from "./LeadGenerationImages/pic5.png";
import Pic6 from "./LeadGenerationImages/pic6.png";
import Pic7 from "./LeadGenerationImages/pic7.png";
import Pic8 from "./LeadGenerationImages/pic8.png";
import Pic9 from "./LeadGenerationImages/pic9.png";

function LeadGeneration() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              YOU ARE OUT OF BUSINESS  <span> IF YOU DON'T HAVE A VISION</span>
            </h3>
            <p>
            The Process Of Lead Generation Is A Skill To Generate Potential Customers To Generate The Growth Of The Business.   
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
            <img src={Pic5} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS">TO INFLUENCE IS A SKILL  </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={Pic6} alt="" />
              <h3>Shower Offers </h3>
              <p>
              It is a Stressful Task To Create Room For Better Conversion Rate Unless You are The Top Player. One Way to Make Your Marketing Meaningful Is To Shower Offers Instead Of Old-School Methods. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic7} alt="" />
              <h3>Be Different </h3>
              <p>
              It is The Different Which Wins. Write Better Scripts To Blow The Competition Away. Old Ways Stink, The Technology and The Market Is Growing Significantly, Pull Up Your Socks. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic8} alt="" />
              <h3>The Most Worked </h3>
              <p>
              Remarketing is The Most Worked Method Of All Time. Logically Presenting The Ads User Searched Increases Brand Awareness And Influences The Mind Of The Customer To Grab It.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic9} alt="" />
              <h3>Target Potential Clients </h3>
              <p>
              Encouraging Your and Competitor’s Customer To Buy Products They Already Use Is A Smart Way To Access People. A Great Way To Stick Your Potential Clients Around Your Company. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> LEAD GENERATION SERVICES </h1>

          <div className="column">
            <div className="image">
              <img src={Pic4} alt="" />
            </div>

            <div className="content">
              <h3>No More Fight For LEAD  </h3>
              <p>
              The Old-School Methods Of Marketing Has Expired Now. Businesses Try Their Level Best To Level Up Their Marketing Returns. B2B Marketing Is The Newest Applied & Tested Method To Tackle Business Growth Challenges. 
              </p>
              <p>
              Don’t Worry, We Will Mind Your Business. With Our Service, You Will Experience Exponential Growth In Customers. We Do Not Compromise With Quality, Thus Provide World-Class Service At Prices Your Pocket Won’t Feel A Touch.
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
                <h3>Joseph Robin</h3>

                <div class="comment">
                  Impressed with their service quality and working strategy.
                  They have a dedicated team to ensure all your needs. Loved
                  working with them. So attractive and easy to use, reduced the
                  loading time significantly by use of proper technology.
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
                <img src={Pic2} alt="" />
                <h3>Ambel Gangoloi</h3>
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

export default LeadGeneration;
