import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Navbar
export const Navbar = styled.div<{ active?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ active }) => (active ? "#fff" : "#222")};
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ active }) => (active ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none")};
`;

// Navbar Container
export const NavbarContainer = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ active }) => (active ? "10px 0" : "20px 0")};
  transition: all 0.3s ease-in-out;
`;

// Navbar List
export const NavbarList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  color: red;
`;

// Navbar Links
export const NavbarLink = styled.a<{ current?: boolean }>`
  color: ${({ current }) => (current ? "#c0392b" : "#fff")};
  text-decoration: none;
  padding: 7px 15px;
  font-weight: ${({ current }) => (current ? "bold" : "normal")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #c0392b;
    font-weight: bold;
  }
`;

export const ActiveLink = styled(NavbarLink)`
  color: #000;
`;

// Content Headings
export const ContentHeading = styled.h2`
  font-size: 150%;
  margin: 20px 0;
`;

// Content Subheading
export const ContentSubheading = styled.h3`
  font-size: 150%;
  margin: 20px 0;
`;

// Content Paragraph
export const ContentParagraph = styled.p`
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
`;