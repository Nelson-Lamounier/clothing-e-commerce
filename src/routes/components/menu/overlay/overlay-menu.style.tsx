import styled, { keyframes } from "styled-components";

// Keyframes
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Overlay Container
export const OverlayContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100vw)")};
  transition: transform 0.8s ease-in-out;
`;

// Navigation
export const Nav = styled.nav`
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  list-style: none;
  height: 100%;
  padding: 0;
`;

export const NavItem = styled.li<{ order: number }>`
  height: 20%;
  overflow: hidden;
  background-color: ${({ order }) =>
    `var(--navColor${order + 1})`}; // Dynamically map colors
  animation: ${({ order }) => (order !== undefined ? slideIn : slideOut)} 0.4s
    linear ${({ order }) => `${0.2 * order}s`} both;
`;

export const NavLink = styled.a`
  position: relative;
  top: 45%;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  display: block;
  text-align: center;

  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content: "";
    width: 25vw;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: 47.5%;
    left: 0;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;