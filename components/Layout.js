import { Container } from "@mui/material";
import NavbarBox from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarBox />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
