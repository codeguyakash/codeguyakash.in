import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div id="logo">CODEGUYAKASH</div>
          <div id="nav-items">
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
          <div>
            <a
              id="resume-btn"
              href="https://docs.google.com/document/d/1GBf_ttAsUqePP31VSDYzYbeAmU7fZevEcFfTm-HRWdg/view"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD CV
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
