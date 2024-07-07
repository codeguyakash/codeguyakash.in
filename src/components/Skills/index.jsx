import React from "react";
import "./style.css";

const skills = [
  {
    name: "MongoDB",
    icon: "mongodbLogo",
  },
  {
    name: "Express.js",
    icon: "expressLogo",
  },
  {
    name: "React.js",
    icon: "react",
  },
  {
    name: "Node.js",
    icon: "nodejsLogo",
  },
];

const index = () => {
  return (
    <section id="skill-section">
      <div id="heading">
        <h1>SKILLS</h1>
        <h3>Expertise in technologies</h3>
      </div>
      <div className="container">
        <div className={`skill skill-${index + 1}`} key={index}>
          <div className="skill-title">
            <img src="" alt={`Logo`} className="skills-logos" />
            <span>"Node"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
