import React, { useState } from "react";
import "./style.css";

const Index = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="container" id="home">
        <nav>
          <div id="logo">CODEGUYAKASH</div>
          <div id="nav-items" className={isNavVisible ? "visible" : ""}>
            <ul>
              <li>
                <a target="_self" rel="noreferrer" href="#hero-section">
                  HOME
                </a>
              </li>
              <li>
                <a target="_self" rel="noreferrer" href="#skill-section">
                  SKILLS
                </a>
              </li>
              <li>
                <a target="_self" rel="noreferrer" href="#project-section">
                  PROJECTS
                </a>
              </li>
              <li>
                <a target="_self" rel="noreferrer" href="#about-section">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
          <a
            id="resume-btn"
            href="https://url.codeguyakash.me/rehdlbzzvj"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD CV
          </a>
        </nav>
      </div>
    </>
  );
};

export default Index;
