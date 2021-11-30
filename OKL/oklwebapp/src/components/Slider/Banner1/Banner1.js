import React from "react";
import "./Banner1.css";
import KidsVideo from "../../../assets/Video/KidsVideo.mp4";
function Banner1() {
  return (
    <div className="bannerContainer">
      <div className="bannerText">
        <h1>"Every child is special, let the pencil speak with OKidzLabs."</h1>
      </div>
      <div className="bannerVideo">
        <video
          src={KidsVideo}
          type="video/mp4"
          autostart
          autoplay
          loop
          controls
        ></video>
      </div>
    </div>
  );
}

export default Banner1;
