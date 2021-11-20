import React from "react";
import "./AboutUs.css";
import Android from "./AboutUsImages/AndroidPNG.png";
import BG from "./AboutUsImages/bg.png";
import CoworkingAmico from "./AboutUsImages/Coworking-amico.png";
import Doctor from "./AboutUsImages/doctor-woman-400px.png";
import IOS from "./AboutUsImages/iosPNG.png";
import Learn from "./AboutUsImages/learn.png";
import Movie from "./AboutUsImages/movie.png";
import Videocall from "./AboutUsImages/videocall.png";
function AboutUs() {
  return (
    <div className="wrapper">
      <div className="landing">
        <div className="landingText">
          <h1>
          Here Is {" "}
            <span style={{ color: "#1e5f87", fontSize: "4vw" }}>Our Resume</span>{" "}
          </h1>
          <h3>
          Hello, We are TechMasterGogo! A Dedicated Marketing and Advertising Agency. We are Trained To Turn your Ideas into Reality and Bring Out Exceptional Quality. Our Team has Successfully Transformed Boring, Difficult Projects to a Mighty Conclusion.
          You look Overburdened and Want Some Help 
          We will Beat the Tar Out of These Projects. You can finally cherish your weekend!
          </h3>
          <div className="btnCSS">
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="landingImage">
          <img src={BG} alt="" />
        </div>
      </div>

      <div className="about">
        <div className="aboutText">
          <h1>
          Goodbye Boring Blogs <br></br>{" "}
            <span style={{ color: "#2f8be0", fontSize: "3vw" }}>
            Goodbye Crummy Captions
            </span>{" "}
          </h1>
          <img src={Doctor} alt="" />
        </div>
        <div className="aboutList">
          <ol>
            <li>
              <span>01</span>
              <p>
                {" "}
                We are Knowledgeable and Experienced. Each member of our staff is an expert in the product they support. They take part in ongoing education, staying up to date on the latest features, trends, tips and tricks. So, they can pass what they learn on to our clients and use it to help ensure each projects success.
              </p>
            </li>
            <li>
              <span>02</span>
              <p>
                
              Our team of experts is not only knowledgeable, they’re passionate about helping our customers succeed. If you are looking for peace of mind that your technology partner will be there when you need them, look no further. From our first interaction, we will focus our efforts on helping you find a solution to the issues you face.
              </p>
            </li>
            <li>
              <span>03</span>
              <p>
              Unlike many value-added resellers who only specialize in one or two products, we have the expertise to help you manage all of your business technology. This makes us a great fit for businesses who don’t have the resources to hire their own IT staff, or who want to add a little extra muscle to their team.
              </p>
            </li>
            <li>
              <span>04</span>
              <p>
              Perhaps one of our clients put it best when she described us as “a personal service.” She went on to say, “the way we do now things is amazing, efficient and easy. The transition between then and now (before hiring TechMasterGoGO and after) is amazing.”
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className="infoSection">
        <div className="infoHeader">
          <h1>
            Things you could do during the <br></br>{" "}
            <span style={{ color: "#1e5f87" }}>Working With Us.</span>{" "}
          </h1>
        </div>
        <div className="infoCards">
          <div className="card one">
            <img src={Movie} className="cardoneImg" alt="" />
            <div className="cardbgone"></div>
            <div className="cardContent">
              <h2>Binge Watch</h2>
              <p>
                Binge-watch all your favorite TV Shows or Movies during this
                Quarantine!
              </p>
            </div>
          </div>
          <div className="card two">
            <img src={Learn} className="cardtwoImg" alt="" />
            <div className="cardbgtwo"></div>
            <div className="cardContent">
              <h2>Learn a New Skill</h2>
              <p>
                Try a new recipe, Write a blog or Learn a new language this
                Quarantine!
              </p>
            </div>
          </div>
          <div className="card three">
            <img src={Videocall} className="cardthreeImg" alt="" />
            <div className="cardbgone"></div>
            <div className="cardContent">
              <h2>Video Call</h2>
              <p>
                Have fun video calling your friends or family this Quarantine!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="bannerText">
          <h1>
            Visit Our Website Today. <br></br>{" "}
            <span
              style={{ fontSize: "1.6vw", fontWeight: "normal" }}
              className="bannerInnerText"
            >
              Stay Updated and get all your medical needs taken care of!
            </span>{" "}
          </h1>
          <a href="#">
            {" "}
            <img src={Android} alt="" />{" "}
          </a>
          <a href="#">
            {" "}
            <img src={IOS} alt="" />{" "}
          </a>
        </div>
        <div className="bannerImg">
          <img src={CoworkingAmico} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
