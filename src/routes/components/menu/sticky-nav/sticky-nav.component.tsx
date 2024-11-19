import { useEffect, useState, FC  } from "react"

import {Navbar, Container, NavbarList, NavbarLink, ContentHeading, ContentSubheading, NavbarContainer} from "./sticky-nav.style"

const StickyNavBar: FC = () => {
    const [navbarActive, setNavbarActive] = useState(false)

    const handleScroll = () => {
        setNavbarActive(window.scrollY > 50)
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
        
        <Navbar>
          <Container>
            <NavbarList>
              <li><NavbarLink>Home</NavbarLink></li>
              <li><NavbarLink>About</NavbarLink></li>
              <li><NavbarLink>Services</NavbarLink></li>
              <li><NavbarLink>Contact</NavbarLink></li>
            </NavbarList>
          </Container>
        </Navbar>
    

    

        </>

    )

}

export default StickyNavBar