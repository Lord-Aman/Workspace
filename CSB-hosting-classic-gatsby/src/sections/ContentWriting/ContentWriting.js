import React from "react";
import "./ContentWriting.css";

import Pic4 from "./ContentWritingImages/pic4.png";
import Pic1 from "./ContentWritingImages/pic1.png";
import Pic2 from "./ContentWritingImages/pic2.png";
import Pic3 from "./ContentWritingImages/pic3.png";
import S0 from "./ContentWritingImages/s-0.svg";
import S1 from "./ContentWritingImages/s-1.svg";
import S2 from "./ContentWritingImages/s-2.svg";
import S3 from "./ContentWritingImages/s-3.svg";
import S4 from "./ContentWritingImages/s-4.svg";
import S5 from "./ContentWritingImages/s-5.svg";
import S6 from "./ContentWritingImages/s-6.svg";
import { Link } from "../../components/link";
function ContentWriting() {
  return (
    <>
      <section className="sectionBCSS" className="homeBCSS" id="homeBCSS">
        <div className="content">
          <h3 className="h3BCSS">
            <span>Content Is Everywhere</span>
          </h3>
          <h3 className="h3BCSS">
            <span>From a Signal Board to Posts You Share </span>
          </h3>

          <p>
            Content is Indeed The King. Whatever We Read, We Share, We Create is
            Content. Reason Why Everything Started at The First Place.
          </p>
          <Link path="/contactus">
            <a href="#" className="btnBCSS">
              Contact Us
            </a>{" "}
          </Link>
        </div>

        <div className="image">
          <img src={Pic4} alt="" />
        </div>
      </section>

      <section className="sectionBCSS" className="speciality" id="speciality">
        <h1 className="headingBCSS">
          {" "}
          DO<span> REMEMBER</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img className="image" src={S1} alt="" />
            <div className="content">
              <img src={S1} alt="" />
              <h3 className="h3BCSS">Keep It Real </h3>
              <p>
                We get Attached to Things we Connect With. To build Trust, Be
                Real with your Content. Stay Attached to Your Niche and Earn
                Your Customers through Strong Values and Morals.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S2} alt="" />
            <div className="content">
              <img src={S2} alt="" />
              <h3 className="h3BCSS">Keep People In Mind</h3>
              <p>
                In the Long Run, We forget Why We Started. Don’t Write What You
                Want, Write What People Want You To Write. Build Content that is
                Relevant for Everyone.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S3} alt="" />
            <div className="content">
              <img src={S3} alt="" />
              <h3 className="h3BCSS">Keep It Diverse </h3>
              <p>
                Content monetization is the Process of Producing Revenue from
                Online Content. Content can be Text, Data, Images, Apps, Music
                or Video. The Same Content can be a Blog post, a tweet, a
                Facebook note, a Pinterest picture.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S4} alt="" />
            <div className="content">
              <img src={S4} alt="" />
              <h3 className="h3BCSS">Keep Writing </h3>
              <p>
                Remember that Good Content Builds Over Time. Quality takes Time,
                Developing a plan and Building a Site takes Time. Remember that
                Quality Suffers When You Spend Too Little Time or Money.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S5} alt="" />
            <div className="content">
              <img src={S5} alt="" />
              <h3 className="h3BCSS">Keep It Simple </h3>
              <p>
                Content Should Curate People to Read More. Don’t use Fancy Words
                For People To Exit. “Over” is Now Over! Easy to Understand
                Content Makes People Come Running For Your Blogs
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S6} alt="" />
            <div className="content">
              <img src={S6} alt="" />
              <h3 className="h3BCSS">Keep It Meaningful </h3>
              <p>
                Always Make Sure Your Content Adds Value in People’s Lives. Dull
                Captions and Meaningless Content Repels People Faster Than a
                Mosquito Repellent Repelling Mosquito.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBCSS" className="aboutBCSS" id="aboutBCSS">
        <h1 className="headingBCSS">
          {" "}
          GOOD IMPRESSIONS ARE <span>GOOD FOR BUSINESS</span>{" "}
        </h1>

        <div className="column">
          <div className="image">
            <img src={S1} alt="" />
          </div>

          <div className="content">
            <h3 className="h3BCSS">Content Is A Deep Ocean</h3>
            <p>
              Content is Everything. It Represents You, Builds You, Promotes
              You, And Lives Forever. It is The Beginning Of Everything. Good
              Writing Not Only Evoke Sensations that it is Raining but Helps
              Imagine Being Rained Upon.
            </p>
            <p>
              Don’t Worry, You Don’t Have To Go Anywhere! We Create Unique &
              Inventive Writing that Not Only Make People Love You But Make
              People Want You More. With Our Highly Skilled Team Of Creative
              Minds, We Help You Go Beyond Infinity
            </p>
            <div className="buttons">
              <Link path="/contactus">
                <a href="#" className="btnBCSS">
                  Contact Us
                </a>{" "}
              </Link>
              <Link path="/contactus" label="">
                <a href="#" className="btnBCSS">
                  {" "}
                  Home{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionBCSS" className="popular" id="popular">
        <h1 className="headingBCSS">
          {" "}
          GO <span>BEYOND THAN</span> INFINITY{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <span className="price"> Creative </span>
            <img src={S1} alt="" />
            <h3 className="h3BCSS">Creative</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Clarity </span>
            <img src={S2} alt="" />
            <h3 className="h3BCSS">Clarity</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Collective </span>
            <img src={S3} alt="" />
            <h3 className="h3BCSS">Collective </h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Charming </span>
            <img src={S4} alt="" />
            <h3 className="h3BCSS">Charming </h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          {/* <div className="box">
            <span className="price"> Considerable </span>
            <img src={S5} alt="" />
            <h3 className="h3BCSS"> Considerable</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div> */}
          {/* <div className="box">
            <span className="price"> Connect </span>
            <img src={S6} alt="" />
            <h3 className="h3BCSS">Connect</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div> */}
        </div>
      </section>

      <div className="step-container">
        <h1 className="headingBCSS">
          how We <span>Write</span>
        </h1>

        <section className="sectionBCSS" className="steps">
          <div className="box">
            <img src={S0} alt="" />
            <h3 className="h3BCSS">Connect</h3>
          </div>
          <div className="box">
            <img src={S4} alt="" />
            <h3 className="h3BCSS">Create</h3>
          </div>
          <div className="box">
            <img src={S1} alt="" />
            <h3 className="h3BCSS">Craft</h3>
          </div>
          <div className="box">
            <img src={S5} alt="" />
            <h3 className="h3BCSS">Complete</h3>
          </div>
        </section>
      </div>

      <section className="sectionBCSS" className="review" id="review">
        <h1 className="headingBCSS">
          {" "}
          our customers <span>reviews</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={Pic1} alt="" />
            <h3 className="h3BCSS">Shweta Das</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Definitely Changed My Thoughts Into Reality. Amazing Dedication
              And Hard Work. Their Flexibility And Ability To Understand
              Client’s Demand Is Great. They Understand Meaningful Marketing And
              Helped Us Do The Same.
            </p>
          </div>
          <div className="box">
            <img src={Pic2} alt="" />
            <h3 className="h3BCSS">Aman Kumar</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Just at loss of words, I appreciate the eye-tempting designs. The
              new site is absolutely user-friendly. They are created with
              thorough understanding of what I really wanted. Communication was
              super-easy, loved it
            </p>
          </div>
          <div className="box">
            <img src={Pic3} alt="" />
            <h3 className="h3BCSS">Akansha Kumari </h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Impressed With Their Service Quality And Working Strategy. They
              Have A Dedicated Team To Ensure All Your Needs. Loved Working With
              Them. So Attractive And Easy To Use, Reduced The Loading Time
              Significantly By Use Of Proper Technology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentWriting;
