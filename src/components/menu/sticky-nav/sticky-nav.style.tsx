import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: relative;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  transition: background-color 0.3s ease;

  &.navbar-transparent {
    background-color: transparent;
  }

  &.navbar-colored {
    background-color: #555;
    color: #fff;
  }
`;

export const NavBrand = styled(Link)`
  margin: 1.5rem;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 0.2rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101; /* Ensure the overlay appears above the navbar */
`;