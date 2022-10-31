import React, { useState,} from "react";
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


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Project />
      <Read />
      <Contact />
    </>
  );
};

export default Home;
