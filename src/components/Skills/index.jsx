import React from "react";
import "./style.css";

import reactlogo from "../../assets/react.svg";

const index = () => {
  return (
    <section id="skill-section">
      <div id="heading">
        <h1>SKILLS</h1>
        <h3>Expertise in technologies</h3>
      </div>
      <div className="container">
        <div className="skill skill-1">
          <div className="skill-title">
            <img src={reactlogo} alt="MongoDB-Logo" className="skills-logos" />
            <span>MongoDB</span>
          </div>
        </div>
        <div className="skill skill-2">
          <img src={reactlogo} alt="Express.js-Logo" className="skills-logos" />
          <span>Express.js</span>
        </div>
        <div className="skill skill-3">
          <img src={reactlogo} alt="React.js-Logo" className="skills-logos" />
          <span>React.js</span>
        </div>
        <div className="skill skill-4">
          <img src={reactlogo} alt="Node.js-Logo" className="skills-logos" />
          <span style={{ color: "#0f0d0e" }}>Node.js</span>
        </div>
        <div className="skill skill-5">
          <img src={reactlogo} alt="JavaScript-Logo" className="skills-logos" />
          <span>JavaScript</span>
        </div>
        <div className="skill skill-6">
          <img src={reactlogo} alt="HTML-Logo" className="skills-logos" />
          <span>HTML5</span>
        </div>
        <div className="skill skill-7">
          <img src={reactlogo} alt="Css-Logo" className="skills-logos" />
          <span>CSS/CSS3</span>
        </div>
        <div className="skill skill-8">
          <img src={reactlogo} alt="BootStrap-Logo" className="skills-logos" />
          <span>BootStrap </span>
        </div>
        <div className="skill skill-9">
          <img src={reactlogo} alt="Git-Logo" className="skills-logos" />
          <span>Git/Github</span>
        </div>
        <div className="skill skill-10">
          <img src={reactlogo} alt="Material" className="skills-logos" />
          <span style={{ color: "#0f0d0e" }}>Material UI</span>
        </div>
      </div>
    </section>
  );
};

export default index;
