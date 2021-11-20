import React, { Component } from "react";
import "./Counter.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  componentDidMount() {
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now) + "+");
            },
          }
        );
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <span className="counter-value">113</span>

                <h3>Successful Projects</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-suitcase"></i>
                </div>
                <span className="counter-value">52</span>
                <h3>Satisfied Clients</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <span className="counter-value">7</span>
                <h3>Countries</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-smile"></i>
                </div>
                <span className="counter-value">210</span>
                <h3>Happy %</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
