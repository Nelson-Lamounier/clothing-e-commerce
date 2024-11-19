import { FC } from "react";

import {MenuBarsContainer} from "./menu-bar.style"
interface  MenuBarsProps {
    toggleMenu: () => void;
}

const MenuBars: FC<MenuBarsProps> = ({ toggleMenu }) => {
    return (
      <MenuBarsContainer onClick={toggleMenu}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </MenuBarsContainer>
    );
  };
  
  export default MenuBars;