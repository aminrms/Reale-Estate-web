import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// Material-UI
import { Container, Typography } from "@mui/material";
// Material-Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// Router
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import MenuMobiles from "./MenuMobiles";
const NavbarLinks = [
  {
    item: "Home",
    path: "/",
  },
  {
    item: "Search",
    path: "/search",
  },
  {
    item: "Buy Property",
    path: "/search?purpose=for-sale",
  },
  {
    item: "Rent Property",
    path: "/search?purpose=for-rent",
  },
];
const NavbarBox = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(true);
  };
  const closeHandler = () => {
    setMenu(false);
  };
  return (
    <Container maxWidth="xl">
      <section className="navbar">
        <div className="navbar-logo">
          <Link style={{ cursor: "pointer" }} href="/">
            <Typography variant="h5" component="h5">
              Real Estate
            </Typography>
          </Link>
        </div>
        <Box className="linksBox" sx={{ display: { xs: "none", md: "flex" } }}>
          {NavbarLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path} passHref>
                  {item.item}
                </Link>
              </li>
            );
          })}
        </Box>
        <Box
          className="hamburger-bar"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon
            onClick={menuHandler}
            sx={{ display: menu ? "none" : "flex", cursor: "pointer" }}
          />
          <CloseIcon
            onClick={closeHandler}
            sx={{
              display: menu ? "flex" : "none",
              zIndex: menu ? "3" : "1",
              cursor: "pointer",
            }}
          />
        </Box>
        <MenuMobiles setMenu={setMenu} menu={menu} NavbarLinks={NavbarLinks} />
      </section>
    </Container>
  );
};

export default NavbarBox;
