import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
  AboutSpace,
  AboutSpace2,
} from "./AboutElements";
import pdfFile from "../../files/Resume.pdf";

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutH1>About</AboutH1>
      </AboutContent>
      <AboutContent>
        <AboutSpace2></AboutSpace2>
        <AboutP>
          For the past three years, I've been a student at the Univesity of
          South Carolina. During this time, I've worked on many projects and did
          research{" "}
          <a href={pdfFile} target="_blank" rel="noreferrer">
            CV/Resume
          </a>
          .
        </AboutP>
        <AboutSpace></AboutSpace>
        <AboutP>
          I also work at Univesity of South Carolina CEC Maker Space as a
          mentor. I helped host Arduino workshops and help students who need any
          assistance with electronics in their projects.
        </AboutP>
        <AboutSpace></AboutSpace>
        <AboutSpace></AboutSpace>
        <AboutP>
          My interests are in AI/ML, signal analysis, and reinforcement
          learning.
        </AboutP>
        <AboutP>
          Outside of work, I read, make projects with microcontrollers, and play
          tennis.
        </AboutP>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
