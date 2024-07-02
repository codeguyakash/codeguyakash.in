import React from "react";
import "./style.css";

const index = () => {
  return (
    <>
      <section id="about-section">
        <div id="heading">
          <h1>ABOUT</h1>
          <h3>Frontend Software Engineer</h3>
        </div>
        <div className="container">
          <div id="about-image">
            <img
              src="https://codeguyakash.github.io/akash/image/1693131029776.jpg"
              alt="heroimage"
            />
          </div>
          <div id="about-content">
            <p>
              Hey,👋 I'm <span>AKASH.</span> I am a skilled Frontend developer
              with expertise in ReactJs and experience building responsive,
              user-friendly websites using HTML, CSS, and JavaScript. I'm also
              proficient in front-end frameworks like Material UI and React.js.{" "}
              <span>
                Currently, I'm actively pursuing mastery of the MERN stack
                (MongoDB, Express, React, Node.js).
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
