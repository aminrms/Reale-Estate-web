import React from "react";

// Material-UI
import { Box, Stack } from "@mui/material";
// Next
import Link from "next/link";

const MenuMobiles = ({ menu, NavbarLinks, setMenu }) => {
  return (
    <Box
      className={menu ? "menuBox show" : "menuBox"}
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      {NavbarLinks.map((item, index) => {
        return (
          <li onClick={() => setMenu(false)} key={index}>
            <Link href={item.path} passHref>
              {item.item}
            </Link>
          </li>
        );
      })}
    </Box>
  );
};

export default MenuMobiles;
