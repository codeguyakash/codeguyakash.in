import React from "react";
import "./style.css";
import heroimage from "../../assets/images/heroimage.png";

const Index = () => {
  return (
    <section id="hero-section">
      <div id="hero-content">
        <h1 className="welcome">WELCOME, FRIEND</h1>
        <h2>Stuck in tutorial hell?</h2>
        <div>
          <p>
            You’ve come to the right place. We make learning the JavaScript
            ecosystem fun, approachable, and easy...
          </p>
        </div>
        <div id="hire-btn-div">
          <a id="hire-btn" href="mailto:codeguyakash@gmail.com">
            HIRE ME
          </a>
        </div>
      </div>
      <div id="hero-image-div">
        <div>
          <img src={heroimage} alt="heroimage" id="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Index;
