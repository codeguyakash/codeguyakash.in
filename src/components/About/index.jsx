import React from "react";
import "./style.css";
import profileImage from "../../assets/images/profile.png";

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
              src={profileImage}
              alt="heroimage"
            />
          </div>
          <div id="about-content">
            <p>
              :-) Hey, I'm <span>AKASH.</span> I have been a full-stack web developer since 2020, and I love React. I didn't even know what React was when I landed my first job, but once I discovered it, I immediately fell in love.
              <span>


                Through many hours of studying and practice, I was eventually able to learn enough React to comfortably build any project I could think of.</span> Now, my passion is sharing that knowledge with others. I learned programming both on my own and in college.

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
