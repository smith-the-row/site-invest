import React from "react";
import { IconContext } from "react-icons";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#f4f4f4", size: "2.4rem" }}>
      <Box sx={{ p: 2 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <Typography variant="h4" gutterBottom>
                CoinSignalPro
              </Typography>
              <Typography variant="body2" component="div">
                We are a US Registered company found by a group of Wall Street
                high frequency traders. We have 30 years of combined experience
                trading the cryptocurrency market using cutting edge machine
                learning algorithms.
              </Typography>
            </Box>
            <Box sx={{ p: { xs: 3, md: "0px" }, mb: 2 }}>
              <Typography variant="body2" component="div">
                © 2014 – 2022 CoinSignalPro Trade. All rights reserved
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </IconContext.Provider>
  );
};

export default Footer;
