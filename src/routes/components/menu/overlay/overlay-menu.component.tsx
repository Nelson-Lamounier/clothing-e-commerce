import { FC } from "react";

import {OverlayContainer, Nav, NavList, NavItem, NavLink } from './overlay-menu.style'

interface MenuItem {
  id: string;
  href: string;
  label: string;
}

const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

// const menuItems: MenuItem[] = [
//   // { id: "nav-1", href: "#", label: "Home" },
//   // { id: "nav-2", href: "#about", label: "About" },
//   // { id: "nav-3", href: "#skills", label: "Skills" },
//   // { id: "nav-4", href: "#projects", label: "Projects" },
//   // { id: "nav-5", href: "#contact", label: "Contact" },
// ];

interface OverlayMenuProps {
  isOpen: boolean;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen }) => {
  return (
    <OverlayContainer isOpen={isOpen}>
      <Nav>
        <NavList>
          {menuItems.map((item, index) => (
            <NavItem key={item} order={index}>
              <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </OverlayContainer>
  );
};

export default OverlayMenu;