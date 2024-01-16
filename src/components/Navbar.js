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
                <a href="#hero-section">HOME</a>
              </li>
              <li>
                <a href="#skill-section">SKILLS</a>
              </li>
              <li>
                <a href="#project-section">PROJECTS</a>
              </li>
              <li>
                <a href="#about-section">ABOUT</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              id="resume-btn"
              href="https://drive.google.com/file/d/1GpLrPq3Fhp76mEkIadNNHXYzv6tR4RTo/view"
              target="_blank"
              rel="refer"
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
