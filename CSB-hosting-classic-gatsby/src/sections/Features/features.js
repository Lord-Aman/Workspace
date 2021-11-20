import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "glightbox/dist/css/glightbox.css";
import value1 from "assets/Animated/bicycle.gif";
import value2 from "assets/Animated/cafe.gif";
import value3 from "assets/Animated/coffee.gif";
import "./features.css";

const features = () => {
  return (
    <section id="values" className="values">
      <div className="container">
        <header className="section-header">
          <h2
            style={{
              color: "#4589d6",
              fontSize: "25px",
            }}
          >
            How we Roll
          </h2>
          <p>
            We deliver you <span className="makeOrange">4G’s</span> – Great
            Quality, Growth, Guidance & Glory
          </p>
        </header>

        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <img src={value1} className="img-fluid" alt="" />
              <h3>Understand Requirements </h3>
              <p>
                We shop the Perfect Ingredients needed to Cook a Great Website.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src={value2} className="img-fluid" alt="" />
              <h3>Technology Assessment </h3>
              <p>
                We blend Technology with Creative Imagination to Never Stay
                Outdated.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src={value3} className="img-fluid" alt="" />
              <h3>
                Quality <br></br>Assurance{" "}
              </h3>
              <p>
                We create Quality Content that can Change your State of Mind in
                a Second.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;
