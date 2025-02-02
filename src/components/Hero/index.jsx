import React from "react";
import "./style.css";
import heroimage from "../../assets/images/heroimage.png";

const Index = () => {
  return (
    <section id="hero-section">
      <div id="hero-content">
        <h1 className="welcome">WELCOME, FRIENDS</h1>
        <h2>Full Stack developer?</h2>
        <div>
          <p>
            I'm Akash a Developer
            who turns ideas into reality.
            <br />
            I’m here to build, break, and innovate!"
          </p>
          <div id="hire-btn-div">
            <a id="hire-btn" href="mailto:codeguyakash@gmail.com">
              HIRE ME
            </a>
          </div>
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
