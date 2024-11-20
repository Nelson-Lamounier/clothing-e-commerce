import { useEffect, useState, FC } from "react";
import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import {
//   Navbar,
//   Container,
//   NavbarList,
//   NavbarLink,
//   ContentHeading,
//   ContentSubheading,
//   NavbarContainer,
// } from "./sticky-nav.style";

const StickyNavBar: FC = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-trasparent");
      }
      window.addEventListener("scroll", updateNavbarColor);
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    };
  });

  // const handleScroll = () => {
  //   setNavbarActive(window.scrollY > 50);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Navbar bg="light" data-bs-them="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default StickyNavBar;
