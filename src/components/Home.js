import React, { useEffect ,useState} from "react";
// import PreLoader from './PreLoader'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Divider from "./Divider";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);
  return (
    <>
      <div>
        {isOnline ? (
          <span
            className="online-status"
            style={{ textShadow: "green 1px 0 10px" }}
          >
            🟢
          </span>
        ) : (
          <span
            className="online-status"
            style={{ textShadow: "red 1px 0 10px" }}
          >
            🔴
          </span>
        )}
      </div>
      <Navbar />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
