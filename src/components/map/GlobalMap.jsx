import React from "react";
import { Container, Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const GlobalMap = () => {
  return (
    <>
      <Container sx={{ mt: "5rem", mb: "3rem" }}>
        <Box>
          <Box>
            <Typography variant="h4" component="div" textAlign="center">
              Global trading platform
            </Typography>
            <Typography variant="body1" component="div" textAlign="center">
              People from 32 countries trade with CoinSignalPro ®
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
              width: "80%",
              m: "auto",
            }}
          >
            <img src="/img/map.svg" alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: { xs: 2, md: "0px" },
            }}
          >
            <CountUp start={0} end={11860931} delay={0}>
              {({ countUpRef }) => (
                <Box>
                  <Typography
                    variant="h4"
                    textAlign="center"
                    ref={countUpRef}
                  />
                </Box>
              )}
            </CountUp>
            <Typography variant="body1" component="div" textAlign="center">
              Active Account
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CountUp start={0} end={19562930} delay={0}>
              {({ countUpRef }) => (
                <Box>
                  <Typography
                    variant="h4"
                    textAlign="center"
                    ref={countUpRef}
                  />
                </Box>
              )}
            </CountUp>
            <Typography variant="body1" component="div" texxtAlign="center">
              Monthly trades
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default GlobalMap;
