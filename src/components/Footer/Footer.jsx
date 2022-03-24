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
                Trading and investing involves significant level of risk and is
                not suitable and/or appropriate for all clients. Please make
                sure you carefully consider your investment objectives, level of
                experience and risk appetite before buying or selling. Buying or
                selling entails financial risks and could result in a partial or
                complete loss of your funds, therefore, you should not invest
                funds you cannot afford to lose.
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
