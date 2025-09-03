import React, { useEffect, useState, useCallback } from 'react';
import profileImage from '../assets/images/profile.png';
import axios from 'axios';
import Heading from './Heading';

const About = () => {
  const [user, setUser] = useState(null);
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
        localStorage.setItem('userData', JSON.stringify(res.data));
        setIsLoading2(false);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const fetchContributions = useCallback(async () => {
    let payload = { username: 'codeguyakash', selectedYear: year };
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://git-graph-node.vercel.app/graph',
        payload
      );
      setContributions(response.data.data);
    } catch (error) {
      console.error('Error fetching contributions:', error);
    }
    setIsLoading(false);
  }, [year]);

  useEffect(() => {
    fetchContributions();
  }, [year, fetchContributions]);

  const getColor = (count) => {
    if (count === 0) return 'bg-gray-200';
    if (count <= 3) return 'bg-gray-300';
    if (count <= 6) return 'bg-gray-400';
    if (count <= 10) return 'bg-gray-500';
    return 'bg-gray-600';
  };

  const columns = [];
  const WEEK_DAYS = 7;
  for (let i = 0; i < contributions.length; i += WEEK_DAYS) {
    columns.push(contributions.slice(i, i + WEEK_DAYS));
  }

  return (
    <section id="about-section" className="pb-24 mt-10 mb-10">
      <Heading title="ABOUT" subtitle="Frontend Software Engineer" />

      <div className="container flex flex-col items-center gap-8">
        <div id="about-image">
          <img
            src={user?.avatar_url || profileImage}
            alt="hero-image"
            className="w-[200px] h-[200px] border-[5px] border-[#3f3d3e] rounded-full mb-12 transition-transform duration-500 hover:scale-105"
          />
          {isLoading2 && (
            <div className="animate-pulse w-20 h-20 bg-gray-300 rounded-full"></div>
          )}
        </div>

        <div
          id="about-content"
          className="w-1/2 text-center max-md:w-full max-md:text-justify">
          <p className="text-2xl font-semibold">{user?.name}</p>
          <p className="text-lg font-semibold">Followers: {user?.followers}</p>
          <p className="text-sm">
            {user?.bio ||
              'I am a Frontend Software Engineer with a passion for building scalable and responsive web applications. I have experience in building web applications using React.js, Node.js, Express.js, and MongoDB. I am also familiar with Tailwind CSS, JavaScript, HTML, CSS, GitHub, MySQL, Angular, Material-UI, Flutter, Linux, and VS Code.'}
          </p>
          <div className="text-sm my-2">
            <a
              href={
                user?.email
                  ? `mailto:${user.email}`
                  : 'mailto:codeguyakash@gmail.com'
              }
              target="_blank"
              rel="noreferrer"
              id="github-link"
              className="">
              💌 e-mail : {user?.email || 'codeguyakash@gmail.com'}
            </a>
            <br />

            <a
              href={`https://x.com/intent/follow?screen_name=${user?.login}`}
              target="_blank"
              rel="noreferrer"
              id="github-link"
              className="">
              🕊️ twitter : @{user?.twitter_username || 'codeguyakash'}
            </a>
            <p className="">📍 {user?.location}</p>
          </div>
        </div>

        <div className="p-5 w-full flex flex-col items-center">
          <div className="flex flex-wrap gap-2 my-5">
            {['2021', '2022', '2023', '2024', '2025'].map((yr) => (
              <button
                key={yr}
                className="w-20 rounded-full cursor-pointer text-white border  bg-black hover:bg-white hover:text-black transition px-2 text-sm hover:border"
                onClick={() => setYear(yr)}>
                {yr}
              </button>
            ))}
          </div>

          {/* Loader */}
          <div className="h-6 mb-3">
            {isLoading && (
              <p className="text-center">Please wait Fetching...</p>
            )}
          </div>

          {/* Contribution Graph */}
          <div className="flex gap-[3px] overflow-x-auto p-2 max-w-full">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-[3px]">
                {column.map((item, rowIndex) => {
                  const lastItem =
                    colIndex === columns.length - 1 &&
                    rowIndex === column.length - 1;

                  return (
                    <div
                      key={rowIndex}
                      title={`Date: ${item.date} | Contributions: ${item.contributionCount}`}
                      className={`w-[15px] h-[15px] rounded-sm cursor-pointer transition hover:opacity-80 ${getColor(
                        item.contributionCount
                      )} ${
                        lastItem ? 'w-full h-[105px] bg-gray-800' : ''
                      }`}></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
