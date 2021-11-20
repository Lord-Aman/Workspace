import React from "react";
import "./SocialMedia.css";

import Pic1 from "./SocialMediaImages/pic1.png";
import Pic3 from "./SocialMediaImages/pic3.png";
import Pic11 from "./SocialMediaImages/pic11.png";

import Pic13 from "./SocialMediaImages/pic13.png";
import Pic14 from "./SocialMediaImages/pic14.png";
import Pic15 from "./SocialMediaImages/pic15.gif";
import Pic16 from "./SocialMediaImages/pic16.gif";
import Pic17 from "./SocialMediaImages/pic17.png";
import { Link } from "../../components/link";

function SocialMedia() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              Provide for the PEOPLE <span>PEOPLE will provide you! </span>
            </h3>

            <p>
              Social Media holds the power to turn Illusion into Reality. In a
              world full of Tweets, Algorithm & Digital Connection, We help
              create Human Connection! Powerful tool to Create IMPACT not to
              IMPRESS
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
          <h1 className="headingACSS"> THINK LIKE A WIZARD! </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={Pic13} alt="" />
              <h3>Engage </h3>
              <p>
                Best way to get ENGAGEMENT is to start ENGAGING! Users engage
                with content they find Relatable. Engage is the Ultimate Change.
                Audiences Interest help you reach Everest.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic15} alt="" />
              <h3>Evolve </h3>
              <p>
                The Best way to Stay Fit is to make your Content Hit! Trend is
                like Clothes, it changes with Every Season. It is only Change
                that is Constant, Everything else is Still
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic16} alt="" />
              <h3>Emotion </h3>
              <p>
                There’s no Promotion without Emotion. If your Content Cannot
                Connect, It Cannot Affect. The Number of Posts doesn’t Matter,
                If your Content is Silent
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic17} alt="" />
              <h3>Entertain </h3>
              <p>
                Content goes down the Drain, if it Cannot Entertain. Influence
                people not only to SEE your Content but also to SHARE your
                Content. Sometimes it is the Numbers that Create Wonders
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> Game For Fame!</h1>

          <div className="column">
            <div className="image">
              <img src={Pic14} alt="" />
            </div>

            <div className="content">
              <h3>Secret Sauce Of Social Media </h3>
              <p>
                Don’t Create Content that Survive, Create Content that Live!
                According to Statistics, 89% who buy are 85% who Recommended the
                Brand. Social Media is like “Traffic Sign” that Everyone
                Follows.
              </p>
              <p>
                Don’t Worry, You can Join the Race too! We help Create
                Emotionally Impactful and Creatively Exclusive Content to make
                your Online Presence a Celebration for People. With Our Highly
                Skilled Team, We Transform your Ideas into Great Social Media
                Marketing. Join Us to Increase your Traffic and to Decrease your
                Workload
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

export default SocialMedia;
