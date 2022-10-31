import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectH1,
  ProjectH2,
  ProjectP,
  ProjectSpace,
} from "./ProjectElements";
import pdfFile from "../../files/jtupper_SIGGRAPH2001.pdf";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <ProjectH1>Projects</ProjectH1>
      </ProjectContent>
      <ProjectContent>
        <ProjectH2>Audio Convolution </ProjectH2>
        <ProjectP>
          The objective of this project is to replicate the audio of a song at a
          location using the impulse response.
        </ProjectP>
        <ProjectSpace></ProjectSpace>
        <ProjectH2>Tupper's Self Referential</ProjectH2>
        <ProjectP>
          A project based on{" "}
          <a href={pdfFile} target="_blank" rel="noreferrer">
            Reliable Two-Dimensional Graphing Methods for Mathematical Formulae
            with Two Free Variables
          </a>{" "}
          by Jeff Tupper to generate a desired 106x17 grid using constant k.
        </ProjectP>
        <ProjectSpace></ProjectSpace>
        <ProjectH2>ECG Simulator</ProjectH2>
        <ProjectP>Simulates an ECG signal based on the PQRSTU waves.</ProjectP>
        <ProjectSpace></ProjectSpace>
        <ProjectH2>Molecule Simulaton</ProjectH2>
        <ProjectP>
          A simulator developed using Python for simulation the evolution of
          multiple molecules in a closed space.
        </ProjectP>
        <ProjectSpace></ProjectSpace>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;
