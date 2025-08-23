import { useState, useEffect } from 'react';
import Cards from './Cards';
import axios from 'axios';
import Heading from './Heading';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/codeguyakash/server/main/data.json'
      )
      .then((res) => {
        let data = res.data;
        setProjects(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        console.error('API Fetch Error:', e.message);
        setProjects([]);
      });
  }, []);

  return (
    <section id="project-section">
      <Heading title="Projects" subtitle="Showcasing my work" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 place-items-center">
        {projects.length > 0 &&
          projects.map((item, index) => <Cards items={item} key={index} />)}
      </div>
    </section>
  );
};

export default Projects;
