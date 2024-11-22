import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer.component";

const Layout = () => {
    return (
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout