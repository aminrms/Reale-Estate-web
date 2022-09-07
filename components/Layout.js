import { Container } from "@mui/material";
import Footer from "./Footer";
import NavbarBox from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarBox />
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};
export default Layout;
