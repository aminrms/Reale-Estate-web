import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, Container } from "@mui/material";


const Footer = () => {
  return (
    <footer
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p:1
        }}
      >
        <Typography variant="subtitle2" component="div">
          ©Created by{" "}
          <Typography variant="subtitle2" component="span" color="primary">
            Amin_Ramezani
          </Typography>
        </Typography>
        <Typography
          variant="subtitle"
          component={"h4"}
          title="my-email"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <EmailIcon sx={{ color: "rgb(18, 89, 241)" }} />
          <a
            href="mailto:amin.ramezani.7582@gmail.com"
            className="my-email"
            style={{ color: "#888" }}
          >
            <Typography
              variant="p"
              component={"p"}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              amin.ramezani.7582@gmail.com
            </Typography>
          </a>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
