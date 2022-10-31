import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#000" : "#0f0f0f")} ;
    height: 80px;
    margin-top: -80px
    display: flex;
    justify-content: center;
    align-itemns: center;
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 90%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-family: "Georgia", serif;
  font-size: 35px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: #01bf71;
      transition: 0.2s ease-in-out;
    }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin-left: 24px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1ren;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
