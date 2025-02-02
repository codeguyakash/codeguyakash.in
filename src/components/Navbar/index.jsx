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
          <div className="logo-a">
            <a
              href="https://docs.google.com/document/d/1r-8pxSkfPca_PQvwkNbncUaiIBQB_xtV8F6SHK8jfNs/edit?tab=t.0"
              target="_blank"
              rel="noreferrer"
              className="logo-a"

            >
              CODEGUYAKASH
            </a>
          </div>
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
              <li>

                <a
                  id="resume-btn"
                  href="https://docs.google.com/document/d/1r-8pxSkfPca_PQvwkNbncUaiIBQB_xtV8F6SHK8jfNs/edit?tab=t.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  DOWNLOAD CV

                </a>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    </>
  );
};

export default Index;
