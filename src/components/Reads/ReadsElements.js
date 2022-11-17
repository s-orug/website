import styled from "styled-components";

export const ReadContainer = styled.div`
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

export const ReadH1 = styled.h1`
position: relative;
display: grid;
color: #fff;
font-size: 60px;
text-align: center;
justify-content: center;
bottom:-40px;
color: #01bf71;


@media screen and (max-width: 768px) {
  bottom: 0px;
  font-size: 40px;
}
@media screen and (max-width: 600px) {
  bottom: -100px;
  font-size: 40px;
}
`;

export const ReadH2 = styled.h2`
  position: relative;
  bottom: 100px;
  display: grid;
  color: #fff;
  font-size: 32px;
  text-align: center;
  min-width: 500px;
  text-decoration: none;
  
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }

`;

export const ReadP = styled.p`
  color: #fff;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  height: 200px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const ReadSpace = styled.p`
  margin-top: 24px;
`;

export const ReadSpace2 = styled.p`
  margin-top: 48px;
`;

export const ReadContent = styled.div`
z-index: 3;
position: flex;
padding: 8px 24px;
display: table-cell;
flex-direction: column;
align-items: center;
verticle-align: middle;
`;
