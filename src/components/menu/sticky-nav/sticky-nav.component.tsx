import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavBar, Overlay, NavBrand } from "./sticky-nav.style";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { signOutStart } from "../../../store/user/user.slice";

import axios from "axios";

const StickyNavBar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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

  // useEffect(() => {
  //   if(!currentUser) {
  //     navigate('/')
  //   }
  // }, [currentUser, navigate])

  const signOutUser = () => dispatch(signOutStart());
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      {isMenuOpen && <Overlay onClick={closeMenu} />}
      <NavBar className={navbarColor}>
        {!currentUser ? (
          <>
            <NavBrand to="/signin">LOG IN</NavBrand>
            <NavBrand to="/signup">SIGN UP</NavBrand>
          </>
        ) : (
          <>
            <NavBrand to="/" onClick={signOutUser}>
              LOG OUT
            </NavBrand>
            {/* {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )} */}
          </>
        )}
        <NavBrand to="/cart">SHOPPING BAG(0)</NavBrand>
      </NavBar>
    </NavbarContainer>
  );
};

export default StickyNavBar;
