import styled from "styled-components";

export const ProjectContainer = styled.div`
  background: #0f0f0f;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
`;
export const ProjectBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProjectH1 = styled.h1`
  position: relative;
  bottom: 360px;
  display: grid;
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    bottom: 380;
    font-size: 42px;
  }
  @media screen and (max-width: 600px) {
    bottom: 410px;
    font-size: 36px;
  }
`;

export const ProjectH2 = styled.h2`
  position: relative;
  bottom: 0px;
  display: grid;
  color: #fff;
  font-size: 36px;
  text-align: center;
  min-width: 500px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ProjectP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 5000px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProjectSpace = styled.p`
  margin-top: 24px;
`;

export const ProjectSpace2 = styled.p`
  margin-top: 48px;
`;

export const ProjectContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
