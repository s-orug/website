import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #0f0f0f;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
`;

export const ContactH1 = styled.h1`
  position: relative;
  bottom: 250px;
  color: #fff;
  font-size: 48px;
  width: 100%;
  text-align: center;
  vertical-align: center;
  bottom: -120px;
  color: #01bf71;

  @media screen and (max-width: 768px) {
    bottom: -110px;
    font-size: 42px;
  }
  @media screen and (max-width: 600px) {
    bottom: -100px;
    font-size: 36px;
  }
`;

export const ContactH2 = styled.h2`
  position: relative;
  bottom: 200px;
  display: flex;
  color: #fff;
  font-size: 32px;
  text-align: center;
  justify-content: center;
  min-width: 500px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const ContactP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  vertical-align:middle;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const ContactSpace = styled.p`
  margin-top: 24px;
`;

export const ContactSpace2 = styled.p`
  margin-top: 48px;
`;

export const ContactContent = styled.div`
z-index: 3;
position: flex;
padding: 8px 24px;
display: table-cell;
flex-direction: column;
align-items: center;
verticle-align: middle;

`;
