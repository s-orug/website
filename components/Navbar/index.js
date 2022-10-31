import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const toggleAbout = () => {
    scroll.scrollTo(900);
  };
  const toggleProjects = () => {
    scroll.scrollTo(1800);
  };
  const toggleReads = () => {
    scroll.scrollTo(2700);
  };
  const toggleContact = () => {
    scroll.scrollTo(3600);
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            SAI
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" onClick={toggleAbout}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" onClick={toggleProjects}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="reads" onClick={toggleReads}>
                Reads
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" onClick={toggleContact}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
