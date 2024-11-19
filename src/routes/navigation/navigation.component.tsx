
import { Outlet } from "react-router-dom";
import { useState, FC } from "react";

import MenuBars from "../components/menu/bar/menu-bar.component";
import OverlayMenu from "../components/menu/overlay/overlay-menu.component";
import Sections from "../components/menu/sections/nav-sections.component";
import Home from "../home/home.component";

const Navigation: FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenu =() => {
        setMenuOpen((prev) => !prev)
    }
  return (
    <>
      <MenuBars toggleMenu={toggleMenu} />
      <OverlayMenu isOpen={menuOpen} />
      <Home />
      <Outlet/>
    </>
  );
};

export default Navigation;
