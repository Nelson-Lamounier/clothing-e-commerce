import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavBar, Overlay, NavBrand } from "./sticky-nav.style";
import axios from "axios";

const StickyNavBar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Synchronize authentication state with localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

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

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      await axios.post(
        "http://localhost:8080/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear token and update state
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setErrorMessage(null); // Clear any previous errors
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      setErrorMessage("Logout failed. Please try again.");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      {isMenuOpen && <Overlay onClick={closeMenu} />}
      <NavBar className={navbarColor}>
        {!isAuthenticated ? (
          <>
            <NavBrand to="/signin">LOG IN</NavBrand>
            <NavBrand to="/signup">SIGN UP</NavBrand>
          </>
        ) : (
          <>
            <NavBrand to="button" onClick={handleLogout}>
              LOG OUT
            </NavBrand>
            {errorMessage && <span className="error-message">{errorMessage}</span>}
          </>
        )}
        <NavBrand to="/cart">SHOPPING BAG(0)</NavBrand>
      </NavBar>
    </NavbarContainer>
  );
};

export default StickyNavBar;