import node from '../assets/icons/node-js.svg';
import mongodb from '../assets/icons/mongodb.svg';
import express from '../assets/icons/express.svg';
import reactjs from '../assets/icons/reactjs.svg';

import tailwindcss from '../assets/icons/tailwindcss.svg';
import javascript from '../assets/icons/javascript.svg';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import github from '../assets/icons/github.svg';
import mysql from '../assets/icons/mysql.svg';
import angular from '../assets/icons/angular.svg';
import materailui from '../assets/icons/material-ui.svg';
import flutter from '../assets/icons/flutter.svg';
import linux from '../assets/icons/linux.svg';
import vscode from '../assets/icons/vs-code.svg';
import Heading from './Heading';

const skills = [
  { id: 1, name: 'HTML', icon: html },
  { id: 2, name: 'CSS', icon: css },
  { id: 3, name: 'JavaScript', icon: javascript },
  { id: 4, name: 'TailwindCSS', icon: tailwindcss },
  { id: 5, name: 'Material UI', icon: materailui },
  { id: 6, name: 'ReactJs', icon: reactjs },
  { id: 7, name: 'Angular', icon: angular },

  { id: 8, name: 'ExpressJs', icon: express },
  { id: 9, name: 'Node', icon: node },

  { id: 10, name: 'React Native', icon: reactjs },
  { id: 11, name: 'Flutter', icon: flutter },

  { id: 12, name: 'MongoDB', icon: mongodb },
  { id: 13, name: 'MySQL', icon: mysql },
  { id: 14, name: 'Git/Github', icon: github },
  { id: 15, name: 'Linux', icon: linux },
  { id: 16, name: 'VS Code', icon: vscode },
];

const Skills = () => {
  return (
    <section id="skill-section" className="py-10">
      <Heading title="Skills" subtitle="Expertise in technologies" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6 place-items-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-4">
            <img
              src={skill.icon}
              alt={`${skill.name} Logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
