import React, { useEffect } from "react";
import "./style.css";
import profileImage from "../../assets/images/profile.png";
import axios from "axios";

const index = () => {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/codeguyakash").then((res) => {
        setUser(res.data);
        console.log(`%c @${res.data.login}`, `font-size:30px; color:white;`)
        console.log(res.data);
      }).catch((e) => {
        console.log(e.message);
      });
  }, []);
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
              src={user?.avatar_url || profileImage}
              alt="heroimage"
            />

          </div>

          <div id="about-content">
            <p>{user?.name}</p>
            <p>Followers:{user?.followers}</p>

            <p>{user?.html_url}</p>
            <p>
              {user?.bio || "I am a Frontend Software Engineer with a passion for building scalable and responsive web applications. I have experience in building web applications using React.js, Node.js, Express.js, and MongoDB. I am also familiar with Tailwind CSS, JavaScript, HTML, CSS, GitHub, MySQL, Angular, Material-UI, Flutter, Linux, and VS Code."}
            </p>
            <a href={user?.html_url} target="_blank" rel="noreferrer" id="github-link">
              <p>{`@${user?.twitter_username}`}</p>
            </a>
            <p>{user?.location}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
