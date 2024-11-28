import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarContainer, NavBar, Overlay, NavBrand } from "./sticky-nav.style";

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
        <NavBrand
          to="/signin"
        >
          LOG IN
        </NavBrand>
        <NavBrand
          to="/signup"
        >
          SIGN UP
        </NavBrand>
        <NavBrand
          to={NavBrand}
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOPPING BAG(0)
        </NavBrand>
      </NavBar>
    </NavbarContainer>
  );
};

export default StickyNavBar;
