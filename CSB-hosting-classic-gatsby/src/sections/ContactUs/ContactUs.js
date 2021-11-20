import React, { Component } from "react";
import "./ContactUs.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Link } from "../../components/link";
class ContactUs extends Component {
  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const containerCSS = document.getElementById("containerCSS");

    signUpButton.addEventListener("click", () => {
      containerCSS.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      containerCSS.classList.remove("right-panel-active");
    });
  }

  render() {
    return (
      <>
        <div className="bodyCSS">
          <div className="containerCSS" id="containerCSS">
            <div className="form-containerCSS sign-up-containerCSS">
              <form className="formCSS" action="#">
                <h1 className="h1CSS">Contact Us</h1>
                <div className="social-containerCSS">
                  <a
                    href="https://www.facebook.com/100523885207584/"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/techmastergogo/?utm_medium=copy_link"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social aCSS">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tech-master-gogo"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://twitter.com/TechMasterGogo?s=08"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <span className="spanCSS">
                  Insure the Enter Details is Correct
                </span>
                <input
                  className="inputCSS"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  className="inputCSS"
                  type="Text"
                  placeholder="Enter Your Address"
                />
                <input
                  className="inputCSS"
                  type="text"
                  placeholder="Enter Your Current Location"
                />
                {/* <button className="ghost buttonCSS" id="signIn">
                    Input Details 
                  </button> */}
                <button class="buttonCSS"> Submit </button>
              </form>
            </div>
            <div className="form-containerCSS sign-in-containerCSS">
              <form className="formCSS" action="#">
                <h1 className="h1CSS">Follow Us on Social </h1>
                <div className="social-containerCSS">
                  <a
                    href="https://www.facebook.com/100523885207584/"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/techmastergogo/?utm_medium=copy_link"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social aCSS">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tech-master-gogo"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://twitter.com/TechMasterGogo?s=08"
                    target="_blank"
                    className="social aCSS"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <span className="spanCSS">Fill the Given Details</span>
                <input
                  className="inputCSS"
                  type="name"
                  placeholder="First Name"
                />
                <input
                  className="inputCSS"
                  type="Last Name"
                  placeholder="Last Name"
                />
                <input
                  className="inputCSS"
                  type="Contact Number"
                  placeholder="Contact Number"
                />
                <Link path="/" label="" style={{ marginTop: "20px" }}>
                  <a
                    className="aCSS buttonCSS"
                    style={{
                      padding: "16px",
                    }}
                    href="/"
                  >
                    Go to website
                  </a>
                </Link>
                {/* <button className="buttonCSS">Next</button> */}
              </form>
            </div>
            <div className="overlay-containerCSS">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="h1CSS">Welcome Back!</h1>
                  <p className="pCSS">
                    To keep connected with us please input your personal info
                  </p>
                  <button className="ghost buttonCSS" id="signIn">
                    Input Details
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="h1CSS">Hello, Visitor!</h1>
                  <p className="pCSS">
                    Enter your personal details like Address & location and
                    start journey with us
                  </p>
                  <button className="ghost buttonCSS" id="signUp">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactUs;
