import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Project from "../components/Projects";
import Read from "../components/Reads";
import Contact from "../components/Contact";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [data, setdata] = useState({
    date: "",
  });

  useEffect(() => {
    fetch("/refresh_data").then((res) =>
      res.json().then((data) => {
        setdata({
          date: data.Date,
        });
      })
    );
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Project />
      <Read />
      <Contact />
      <div className="App">
        <header className="App-header">
          <p>{data.date}</p>
        </header>
      </div>
    </>
  );
};

export default Home;
