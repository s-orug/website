import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #0f0f0f;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;

  text-align: center;
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
color: #fff;
font-size: 60px;
width: 100%;
text-align: center;
vertical-align: center;
bottom: -120px;
color: #01bf71;


@media screen and (max-width: 768px) {
  bottom: 240;
  font-size: 42px;
}
@media screen and (max-width: 600px) {
  bottom: 220px;
  font-size: 36px;
}
`;

export const AboutP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  height:-100px;

  @media screen and (max-width: 768px) {
    height:100px;
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
position: flex;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
verticle-align: middle;
`;
