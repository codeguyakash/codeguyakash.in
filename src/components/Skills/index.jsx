import React from "react";
import "./style.css";
import node from "../../assets/icons/node-js.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import express from "../../assets/icons/express.svg";
import reactjs from "../../assets/icons/reactjs.svg";

import tailwindcss from "../../assets/icons/tailwindcss.svg";
import javascript from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import github from "../../assets/icons/github.svg";
import mysql from "../../assets/icons/mysql.svg";

const skills = [
  { id: 1, name: "Node", icon: node },
  { id: 2, name: "MongoDB", icon: mongodb },
  { id: 3, name: "ExpressJs", icon: express },
  { id: 4, name: "ReactJs", icon: reactjs },

  { id: 5, name: "TailwindCSS", icon: tailwindcss },
  { id: 6, name: "JavaScript", icon: javascript },
  { id: 7, name: "HTML", icon: html },
  { id: 8, name: "CSS", icon: css },
  { id: 9, name: "Git/Github", icon: github },
  { id: 10, name: "MySQL", icon: mysql },
];

const SkillSection = () => {
  return (
    <section id="skill-section">
      <div id="heading">
        <h1>SKILLS</h1>
        <h3>Expertise in technologies</h3>
      </div>
      <div className="container">
        {skills.map((skill, index) => (
          <div className={`skill skill-${index + 1}`} key={skill.id}>
            <div className="skill-title">
              <img
                src={skill.icon}
                alt={`${skill.name} Logo`}
                className="skills-logos"
              />
              <span className="color">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
