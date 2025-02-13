import React, { useEffect, useState, useCallback } from 'react';
import './style.css';
import profileImage from '../../assets/images/profile.png';
import axios from 'axios';

const About = () => {
  const [user, setUser] = React.useState(null);
  const [contributions, setContributions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [year, setYear] = useState('2024');
  useEffect(() => {
    setIsLoading2(true);
    axios
      .get('https://api.github.com/users/codeguyakash')
      .then((res) => {
        setUser(res.data);
        console.log(`%c @${res.data.login}`, `font-size:30px; color:white;`);
        console.log(res.data);
        setIsLoading2(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const fetchContributions = useCallback(async () => {
    let payload = { username: 'codeguyakash', selectedYear: year };
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://git-graph-node.onrender.com/graph',
        payload
      );
      setContributions(response.data.data);
      console.log(response.data.data.length);
    } catch (error) {
      console.error('Error fetching contributions:', error);
    }
    setIsLoading(false);
  }, [year]);

  useEffect(() => {
    fetchContributions();
  }, [year, fetchContributions]);

  // Define Color Based on Contributions Count
  const getColor = (count) => {
    if (count === 0) return 'bg-yellow-1';
    if (count <= 3) return 'bg-yellow-2';
    if (count <= 6) return 'bg-yellow-3';
    if (count <= 10) return 'bg-yellow-4';
    return 'bg-yellow-5';
  };

  // Convert Contributions into Column-Major Order (7 Rows per Column)
  const columns = [];
  const WEEK_DAYS = 7;
  for (let i = 0; i < contributions.length; i += WEEK_DAYS) {
    columns.push(contributions.slice(i, i + WEEK_DAYS));
  }
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
            {isLoading2 ? <div className="skeleton-loader"></div> : null}
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
            <div className="flex btn-box">
              {['2021', '2022', '2023', '2024', '2025'].map((yr) => (
                <button
                  key={yr}
                  className="year-btn"
                  onClick={() => setYear(yr)}>
                  {yr}
                </button>
              ))}
            </div>
            <div className="loader-div">
              {isLoading ? (
                <p className="loader">Please wait Fetching...</p>
              ) : (
                ''
              )}
            </div>
            <div className="flex contributions-wrap">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="column">
                  {column.map((item, rowIndex) => {
                    const lastItem =
                      colIndex === columns.length - 1 &&
                      rowIndex === column.length - 1;

                    return (
                      <div
                        key={rowIndex}
                        className={`contribution-boxes ${getColor(
                          item.contributionCount
                        )} hover:opacity-80 transition ${
                          lastItem ? 'last-contribution' : ''
                        }`}
                        title={`Date: ${item.date} | Contributions: ${item.contributionCount}`}></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
