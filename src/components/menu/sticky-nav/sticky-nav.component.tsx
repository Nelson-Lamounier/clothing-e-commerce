import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavBar,

  Overlay,

  NavBrand,
} from "./sticky-nav.style";

const StickyNavBar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavbarColor = () => {
      if (window.scrollY > 399) {
        setNavbarColor("navbar-colored");
      } else {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);


  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      {isMenuOpen && <Overlay onClick={closeMenu} />}
      <NavBar className={navbarColor}>

        <NavBrand href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar" target="_blank" rel="noopener noreferrer">
          LOG IN
        </NavBrand>
        <NavBrand href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar" target="_blank" rel="noopener noreferrer">
          SIGN UP
        </NavBrand>
        <NavBrand href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar" target="_blank" rel="noopener noreferrer">
          SHOPPING BAG(0)
        </NavBrand>

      </NavBar>

    </NavbarContainer>
  );
};



export default StickyNavBar;

