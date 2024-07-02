import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import Divider from "../../components/Divider/index";
import Skills from "../../components/Skills/index";
import Project from "../../components/Project/index";
import About from "../../components/About/index";
import Footer from "../../components/Footer/index";

const Index = () => {
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
      <Project />

      <Divider />
      <About />

      <Divider />
      <Footer />
    </>
  );
};

export default Index;
