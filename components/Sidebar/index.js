import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const [setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    //eslint-disable-next-line
  }, []);

  const toggleAbout = () => {
    scroll.scrollTo(900);
    toggle();
  };
  const toggleProjects = () => {
    scroll.scrollTo(1800);
    toggle();
  };
  const toggleReads = () => {
    scroll.scrollTo(2700);
    toggle();
  };
  const toggleContact = () => {
    scroll.scrollTo(3600);
    toggle();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu onClick={toggle}>
          <SidebarLink to="about" toggle={toggle} onClick={toggleAbout}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleProjects}>
            Projects
          </SidebarLink>
          <SidebarLink to="reads" onClick={toggleReads}>
            Reads
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleContact}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
