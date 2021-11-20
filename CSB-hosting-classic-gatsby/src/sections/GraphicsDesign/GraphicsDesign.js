import React from "react";
import "./GraphicsDesign.css";
import G1 from "./GraphicsDesignImages/g-1.jpg";
import G2 from "./GraphicsDesignImages/g-2.jpg";
import G3 from "./GraphicsDesignImages/g-3.jpg";
import G4 from "./GraphicsDesignImages/g-4.jpg";
import G5 from "./GraphicsDesignImages/g-5.jpg";
import G6 from "./GraphicsDesignImages/g-6.jpg";
import G7 from "./GraphicsDesignImages/g-7.jpg";
import G8 from "./GraphicsDesignImages/g-8.jpg";
import G9 from "./GraphicsDesignImages/g-9.jpg";
import { Link } from "../../components/link";
import homeBCSSImg from "./GraphicsDesignImages/home-img.png";
import Pic1 from "./GraphicsDesignImages/pic1.png";
import Pic2 from "./GraphicsDesignImages/pic2.png";
import Pic3 from "./GraphicsDesignImages/pic3.png";
import S0 from "./GraphicsDesignImages/s-0.svg";
import S1 from "./GraphicsDesignImages/s-1.svg";
import S2 from "./GraphicsDesignImages/s-2.svg";
import S3 from "./GraphicsDesignImages/s-3.svg";
import S4 from "./GraphicsDesignImages/s-4.svg";
import S5 from "./GraphicsDesignImages/s-5.svg";
import S6 from "./GraphicsDesignImages/s-6.svg";
import Pic4 from "./GraphicsDesignImages/pic4.png";

function GraphicsDesign() {
  return (
    <>
      <section className="sectionBCSS" className="homeBCSS" id="homeBCSS">
        <div className="content">
          <h3 className="h3BCSS">
            Strange Yet<span> Powerful </span> <br />
            Simple Yet <span>Unique</span>
          </h3>
          <p>
            Get your Design Rolling to Stop Users from Scrolling! It takes only
            50 milliseconds for a User to decide Whether to Stay or Leave. To
            get Rid of Snap Judgements, We are at Your Rescue
          </p>
          <Link path="/contactus">
            <a href="#" className="btnBCSS">
              Contact Us
            </a>{" "}
          </Link>
        </div>

        <div className="image">
          <img src={homeBCSSImg} alt="" />
        </div>
      </section>

      <section className="sectionBCSS" className="speciality" id="speciality">
        <h1 className="headingBCSS">
          {" "}
          FOCUS ON<span> WHAT MATTERS</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img className="image" src={S1} alt="" />
            <div className="content">
              <img src={S1} alt="" />
              <h3 className="h3BCSS">Let Your Design Speak </h3>
              <p>
                Design not only Conveys Message but also makes People Think.
                Content may get Ignored but Design Doesn’t. Design is a Language
                that Represents Your Brand.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S2} alt="" />
            <div className="content">
              <img src={S2} alt="" />
              <h3 className="h3BCSS">Keep It Simple </h3>
              <p>
                You don’t need to Clutter, Give Your Design Air to Breathe. It
                Doesn’t just Look Nice but Also Works Nice. It is No DOUBT,
                Design make EYES Read The Content
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S3} alt="" />
            <div className="content">
              <img src={S3} alt="" />
              <h3 className="h3BCSS">Less Is More</h3>
              <p>
                Not Only Texts but Fonts, Scaling, Colour Matter to a Great
                Extent. Design is Visual Fun, Make it Unforgettable. Simple
                Design is Pleasing to EYES and Receiving to HEART.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S4} alt="" />
            <div className="content">
              <img src={S4} alt="" />
              <h3 className="h3BCSS">Place It Well </h3>
              <p>
                The Placing of Content is As Important As Content Itself. A Good
                Design Placement helps Everything Look Good. Every Element has a
                Specific Place.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S5} alt="" />
            <div className="content">
              <img src={S5} alt="" />
              <h3 className="h3BCSS">Only The Fast Last </h3>
              <p>
                Don’t Use Design and Images that Take Longer Time to Load.
                People Go Back, If it Stays Blank. Make Your Site Speed a
                Priority. To be On Track, Let Nothing Lack
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S6} alt="" />
            <div className="content">
              <img src={S6} alt="" />
              <h3 className="h3BCSS">Use The Correct Image </h3>
              <p>
                Use Pictures that Resonate to Your Message. A Clear & Meaningful
                Image help User Swipe Right. If You Don’t Agree, Just Remove all
                the Pictures in Your Shopping Site & Try Making an Order
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBCSS" className="aboutBCSS" id="aboutBCSS">
        <h1 className="headingBCSS">
          {" "}
          Graphic and Logo Designing <span>Service</span>{" "}
        </h1>

        <div className="column">
          <div className="image">
            <img src={Pic4} alt="" />
          </div>

          <div className="content">
            <h3 className="h3BCSS">Great Design Is Everywhere Yet Rare</h3>
            <p>
              Keep your Content Close but Your Design Closer. 48% Users Credit
              Design for Growth of a Company or Brand. Web Design is like
              Resume, Creates The First Impression. Don’t let People Just Stare,
              But Make them Download it.
            </p>
            <p>
              Don’t Worry, You’re on the Right Page! We Eat with Eyes First,
              Create Breath-taking Designs that Make People Think. With Our
              Highly Skilled Team, We adapt to Trends Fast, to Make Your Website
              Outlast
            </p>
            <div className="buttons">
              <Link path="/contactus" label="">
                <a href="#" className="btnBCSS">
                  {" "}
                  Contact Us{" "}
                </a>
              </Link>
              <Link path="/contactus" label="">
                <a href="#" className="btnBCSS">
                  {" "}
                  home{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionBCSS" className="popular" id="popular">
        <h1 className="headingBCSS">
          {" "}
          OUR <span>AREAS</span> OF EXPERTISE{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <span className="price"> Website Design </span>
            <img src={S1} alt="" />
            <h3 className="h3BCSS">Website Design </h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Creative Art Design </span>
            <img src={S2} alt="" />
            <h3 className="h3BCSS">Creative Art Design </h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          {/* <div className="box">
            <span className="price"> Logo-design </span>
            <img src={S3} alt="" />
            <h3 className="h3BCSS">Logo-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Graphics-design </span>
            <img src={S4} alt="" />
            <h3 className="h3BCSS">Graphics-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Logo-design </span>
            <img src={S5} alt="" />
            <h3 className="h3BCSS">Logo-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Graphics-design </span>
            <img src={S6} alt="" />
            <h3 className="h3BCSS">Graphics-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div> */}
        </div>
      </section>

      <div className="step-container">
        <h1 className="headingBCSS">
          How We <span> Roll</span>
        </h1>

        <section className="sectionBCSS" className="steps">
          <div className="box">
            <img src={S0} alt="" />
            <h3 className="h3BCSS">Define</h3>
          </div>
          <div className="box">
            <img src={S4} alt="" />
            <h3 className="h3BCSS">Design</h3>
          </div>
          <div className="box">
            <img src={S1} alt="" />
            <h3 className="h3BCSS">Develop</h3>
          </div>
          <div className="box">
            <img src={S5} alt="" />
            <h3 className="h3BCSS">Finally Its Done </h3>
          </div>
        </section>
      </div>

      <section className="sectionBCSS" className="gallery" id="gallery">
        <h1 className="headingBCSS">
          {" "}
          It’s This Way <span> Or No Way! </span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={G1} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Amazing</h3>
              <p>
                “It’s through mistakes that you actually can grow. You have to
                get bad in order to get good.” - Paula Scher
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G2} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Attractive</h3>
              <p>
                “No masterpiece was ever created by a lazy artist.” - Salvador
                Dalí
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G3} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Accessible</h3>
              <p>
                “Good design is all about making other designers feel like
                idiots because that idea wasn’t theirs.” - Frank Chimero
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G4} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Affordable</h3>
              <p>
                “Content precedes design. Design in the absence of content is
                not design, it’s decoration.” - Jeffrey Zeldman
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G5} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Accurate</h3>
              <p>
                "Good design is like a refrigerator - when it works , no one notices, but when it doesn't
                , It sure stinks."" - Irene Au
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G6} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Achiever</h3>
              <p>“Design is thinking made visual.” - Saul Bass</p>
            </div>
          </div>
          <div className="box">
            <img src={G7} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Admirable</h3>
              <p>“Do not seek praise, seek criticism.” - Paul Arden</p>
            </div>
          </div>
          <div className="box">
            <img src={G8} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Adaptable</h3>
              <p>
                “No design works unless it embodies ideas that are held common
                by the people for whom the object is intended.” - Adrian Forty
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G9} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Appreciable</h3>
              <p>
                “Design is a solution to a problem; art is a question to a
                problem.” - John Maeda
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBCSS" className="review" id="review">
        <h1 className="headingBCSS">
          {" "}
          our customers <span>reviews</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={Pic1} alt="" />
            <h3 className="h3BCSS">Nirav Suri</h3>
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
            <h3 className="h3BCSS">Bet-li-Yu</h3>
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
          <div className="box">
            <img src={Pic3} alt="" />
            <h3 className="h3BCSS">Allen Fosis</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Just At Loss Of Words, I Appreciate The Eye-Tempting Designs. The
              New Site Is Absolutely User-Friendly. They Are Created With
              Thorough Understanding Of What I Really Wanted. Communication Was
              Super-Easy, Loved It
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default GraphicsDesign;
