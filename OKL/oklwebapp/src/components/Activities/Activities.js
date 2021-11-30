import React from "react";
import "./Activities.css";
import Football from "../../assets/SVG/football.svg";
import Gamepad from "../../assets/SVG/gamepad.svg";
function Activities() {
  return (
    <div className="activityContainer">
      <div className="activity1">
        <div className="boxContainer">
          <img src={Gamepad} alt="img" />
          <h1>Learning Activities</h1>
          <p>
            Your Website Should Look Good On Any Platform. The Users Of
            Smartphone Are Increasing Exponentially, We Help Improve Your
            Visitor’s Experience.
          </p>
          <button>Explore</button>
        </div>
      </div>
      <div className="activity2">
        <div className="boxContainer">
          <img src={Football} alt="img" />
          <h1>Project & Task</h1>
          <p>
            Your Website Should Look Good On Any Platform. The Users Of
            Smartphone Are Increasing Exponentially, We Help Improve Your
            Visitor’s Experience.
          </p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Activities;
