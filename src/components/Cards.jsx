// Importing skill icons
import reactjs from '../assets/icons/reactjs.svg';
import figma from '../assets/icons/figma.png';
import api from '../assets/icons/api.png';
import socket from '../assets/icons/socket.png';
import node from '../assets/icons/node-js.svg';
import mongodb from '../assets/icons/mongodb.svg';
import express from '../assets/icons/express.svg';
import tailwindcss from '../assets/icons/tailwindcss.svg';
import javascript from '../assets/icons/javascript.svg';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import github from '../assets/icons/github.svg';
import mysql from '../assets/icons/mysql.svg';
import angular from '../assets/icons/angular.svg';
import materialui from '../assets/icons/material-ui.svg';
import flutter from '../assets/icons/flutter.svg';
import linux from '../assets/icons/linux.svg';
import vscode from '../assets/icons/vs-code.svg';

// Skill-to-icon mapping
const skillIcons = {
  'React.js': reactjs,
  'React Native': reactjs,
  'Node.js': node,
  'Express.js': express,
  MongoDB: mongodb,
  'Tailwind CSS': tailwindcss,
  JavaScript: javascript,
  HTML: html,
  CSS: css,
  GitHub: github,
  MySQL: mysql,
  'Angular.js': angular,
  'Material-UI': materialui,
  Flutter: flutter,
  Linux: linux,
  'VS Code': vscode,
  Figma: figma,
  "API's": api,
  WebSocket: socket,
};

const ProjectCard = ({ items }) => {
  const star = new Array(5).fill(0);

  return (
    <div className="card-container min-h-90">
      <div className="cards">
        <h3 className="text-lg font-semibold">{items?.title}</h3>
        <p className="text-sm my-2">{items?.description}</p>

        <h4 className="text-sm font-semibold my-2">Technologies Used:</h4>
        <div className="flex gap-2 items-center justify-start">
          {items?.skills?.sort()?.map((skill, index) => {
            const trimmedSkill = skill.trim();
            return (
              skillIcons[trimmedSkill] && (
                <div className="skill-box" key={index}>
                  <img
                    key={index}
                    src={skillIcons[trimmedSkill]}
                    alt={trimmedSkill}
                    className="skill-icon h-5 w-5 mx-auto"
                  />
                  <span className="text-[10px]">{trimmedSkill}</span>
                </div>
              )
            );
          })}
        </div>

        <div className="stars my-2">
          {star?.map((_, index) => (
            <span className="star-rating" key={index}>
              ☆
            </span>
          ))}
        </div>

        <div className="links flex text-sm gap-2 font-semibold">
          {items?.demoLink !== 'null' && (
            <a
              className="color"
              href={items?.demoLink}
              target="_blank"
              rel="noopener noreferrer">
              Demo
            </a>
          )}
          <br />
          <a
            className="color"
            href={items?.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
