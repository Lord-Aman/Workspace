import React from "react";
import "./Card.css";
function Card2() {
  return (
    <div class="card-container">
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">01</span>
          <span class="card-author subtle">John Smith</span>
          <h2 class="card-title">New Brunch Recipe</h2>
          <span class="card-description subtle">
            These last few weeks I have been working hard on a new brunch recipe
            for you all.
          </span>
          <div class="card-read">Read</div>
          <span class="card-tag card-circle subtle">C</span>
        </div>
        <img
          src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
          alt=""
          class="card-media"
        />
      </div>
      <div class="card-shadow"></div>
    </div>
  );
}

export default Card2;
