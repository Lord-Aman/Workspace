import React from "react";
import "./Banner2.css";
import KidsVideo from "../../../assets/Video/KidsVideo.mp4";
function Banner2() {
  return (
    <div className="bannerContainer">
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

      <div className="bannerText">
        <h1>"Every child is special, let the pencil speak with OKidzLabs."</h1>
      </div>
    </div>
  );
}

export default Banner2;
