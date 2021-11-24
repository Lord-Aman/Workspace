import React from "react";
import BannerImage from "../../assets/Slider/Banner3.jpg";

function banner3() {
  return (
    <div>
      <img style={styles.Image} src={BannerImage} alt="Banner image" />
    </div>
  );
}
const styles = {
  Image: {
    height: "90vh",
    width: "100%",
  },
};
export default banner3;
