import styled from "styled-components";
import { Link } from "react-router-dom";

// Navbar Icon
export const NavbarIconMain = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  background-color: var(--white-color);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .line-main {
    height: 0.2rem;
    width: 3.5rem;
    background-color: var(--light-grey-color);
  }
`;

// Open Navbar Icon
export const OpenNavbarIconMain = styled(Link)`
  position: fixed;
  top: 8rem;
  left: 6.5rem;
  z-index: 200;

  .line-main {
    margin: 0.3rem 0;
    
  }
    
`;

// Navbar Wrapper
export const NavbarWrapperMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  left: 0;
  bottom: -100%;
  z-index: 300;
  opacity: 0;
  padding: 3.5rem 5.5rem 3.5rem 3.5rem;
  transition: bottom 0.5s, opacity 0.2s;
`;

// Main Navbar
export const NavbarMain = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/landscape/Hero-img-02.jpg")
      center no-repeat;
  background-size: cover;
  position: relative;
  overflow-y: hidden;
`;

// Close Navbar Icon
export const CloseNavbarIconMain = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  z-index: 300;

  .line-main {
    position: absolute;
  }
`;

export const DefaultContainer = styled.div`
  background-color: #212529;
  margin: 1.5rem 3.5rem;
  box-shadow: 0 1rem 3rem #555;
  overflow: hidden;
}`




