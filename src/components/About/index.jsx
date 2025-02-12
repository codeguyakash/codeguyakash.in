import React, { useEffect, useState } from 'react';
import './style.css';
import profileImage from '../../assets/images/profile.png';
import axios from 'axios';

const About = () => {
  const [user, setUser] = React.useState(null);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/codeguyakash')
      .then((res) => {
        setUser(res.data);
        console.log(`%c @${res.data.login}`, `font-size:30px; color:white;`);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    let payload = {
      username: 'codeguyakash',
      selectedYear: '2024',
    };
    const response = await axios.post(
      'https://git-graph-node.onrender.com/graph',
      payload
    );
    console.log(response.data.data);
    setContributions(response.data.data);
  };

  return (
    <>
      <section id="about-section">
        <div id="heading">
          <h1>ABOUT</h1>
          <h3>Frontend Software Engineer</h3>
        </div>
        <div className="container">
          <div id="about-image">
            <img src={user?.avatar_url || profileImage} alt="hero-image" />
          </div>

          <div id="about-content">
            <p>{user?.name}</p>
            <p>Followers:{user?.followers}</p>

            <p>{user?.html_url}</p>
            <p>
              {user?.bio ||
                'I am a Frontend Software Engineer with a passion for building scalable and responsive web applications. I have experience in building web applications using React.js, Node.js, Express.js, and MongoDB. I am also familiar with Tailwind CSS, JavaScript, HTML, CSS, GitHub, MySQL, Angular, Material-UI, Flutter, Linux, and VS Code.'}
            </p>
            <a
              href={user?.html_url}
              target="_blank"
              rel="noreferrer"
              id="github-link">
              <p>{`@${user?.twitter_username}`}</p>
            </a>
            <p>{user?.location}</p>
          </div>

          <div className="p-5 main-con-container">
            <div className="flex flex-wrap gap-1">
              {contributions &&
                contributions?.map((item, index) => {
                  const getColor = (count) => {
                    if (count === 0) return 'bg-gray-200 text-black';
                    if (count <= 3) return 'bg-green-300 text-black';
                    if (count <= 6) return 'bg-green-500 text-white';
                    if (count <= 10) return 'bg-green-700 text-white';
                    return 'bg-green-900 text-white';
                  };

                  return (
                    <div
                      key={index}
                      className={`contribution-boxes ${getColor(
                        item.contributionCount
                      )} hover:opacity-80 transition`}
                      title={`Date: ${item.date} | Contributions: ${item.contributionCount}`}>
                      {item.contributionCount > 0 ? item.contributionCount : 0}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
