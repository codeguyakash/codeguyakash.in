import { useState, useEffect } from 'react';
import Cards from '../Cards';
import axios from 'axios';
import './style.css';

const Index = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://codeguyakash.github.io/server/data.json')
      .then((res) => {
        let data = res.data;
        setProjects(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        console.error('API Fetch Error:', e.message);
        setProjects([]); // Ensure projects is always an array
      });
  }, []);

  return (
    <section id="project-section">
      <div id="heading">
        <h1>PROJECT</h1>
      </div>
      <div className="projects">
        {projects.length > 0 &&
          projects.map((item, index) => <Cards items={item} key={index} />)}
      </div>
    </section>
  );
};

export default Index;
