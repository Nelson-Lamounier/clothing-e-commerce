import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: relative;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
  justify-content: end;
  z-index: 100;
  transition: background-color 0.3s;
  &.navbar-transparent {
    background-color: transparent;
  }

  &.navbar-colored {
    background-color: #555;
    color: #fff;
  }
`;

export const NavBrand = styled(Link)`
  margin-right: 2rem;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 100;
  letter-spacing: 0.2rem  
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

// ---

// ### **Key Features**

// 1. **Styled Components**:
//    - All styles are encapsulated and reusable.
//    - Added dynamic props for conditional styling (e.g., `isOpen` for the sliding menu).

// 2. **Dynamic Navbar Color**:
//    - Controlled using `navbarColor` state and applied via `className`.

// 3. **Custom Sliding Menu**:
//    - The menu slides in and out based on `isMenuOpen` state.
//    - Controlled via `Styled.div` with a conditional `isOpen` prop.

// 4. **Overlay**:
//    - Added an overlay that closes the menu when clicked, enhancing UX.

// 5. **Separation of Concerns**:
//    - Logic resides in the component file, and styles in a separate `styled-components` file for better maintainability.

// ---

// ### **How to Use**

// - Place the `ExamplesNavbar.tsx` component in your project, ensuring `styled-components` is installed.
// - Import the `ExamplesNavbar.styles.ts` file and ensure it's in the same directory.
// - Replace any existing navbar implementation with this one.

// Let me know if you need further clarifications or adjustments!