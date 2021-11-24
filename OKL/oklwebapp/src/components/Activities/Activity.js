import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";

function Activity() {
  return (
    <div style={styles.containerActivity}>
      <Card1 />
      <Card2 />
    </div>
  );
}

const styles = {
  containerActivity: {
    display: "flex",
  },
};

export default Activity;
