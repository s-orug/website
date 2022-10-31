import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #0f0f0f;
  display: grid;
  justify-content: left;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
`;
export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AboutH1 = styled.h1`
  position: relative;
  bottom: 250px;
  display: grid;
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    bottom: 285px;
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    bottom: 330px;
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 3000px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutSpace = styled.p`
  margin-top: 24px;
`;

export const AboutSpace2 = styled.p`
  margin-top: 48px;
`;

export const AboutContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
