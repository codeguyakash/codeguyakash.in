import React from "react";
import reactjs from "../../assets/icons/reactjs.svg";
import "./style.css";

const index = ({ items }) => {
  const star = new Array(5).fill(0);
  return (
    <div className="card-container">
      <div className="cards" >
        <img
          src={reactjs}
          alt="project-1"
          id="project-image"
        />

        <h3 className="color">{items.title}</h3>
        <p className="color">{items.description}</p>
        <h4 className="color">Techbologies:{items.skills} </h4>
        <div className="stars">
          {
            star.map((_, index) => (
              <span className="star-rating" key={index}>
                ☆
              </span>))
          }
        </div>
        <div className="links">
          <a className="color" href={items.sourceCodeLink}>
            Source Code
          </a>{" "}
          <br />
          <a className="color" href={items.demoLink}>
            Demo Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
