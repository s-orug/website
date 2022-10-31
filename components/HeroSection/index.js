import React from "react";
import { HeroContainer, HeroH1, HeroP, HeroContent } from "./HeroElement";
import IMG_1847 from "../../images/IMG_1847.jpg";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <img src={IMG_1847} alt=""/>
        <HeroH1> Hi, I am Sai.</HeroH1>
        <HeroP>
          A student at University of South Carolina Majoring in Computer
          Engineering.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
