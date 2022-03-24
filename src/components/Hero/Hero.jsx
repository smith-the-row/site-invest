import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { Box, Button, Typography } from "@mui/material";
import Bot from "./Bot";
import { useNavigate } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="hero"
      style={{
        backgroundImage: "url(/img/bg-img.jpg)",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box className="hero__overlay">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            flexDirection: "column",
          }}
        >
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="h3" textAlign="center">
              Smart. Online Trading
            </Typography>
          </Box>
          <Bot />
          <Box sx={{ mt: 6 }}>
            <Button
              size="large"
              startIcon={<FaChevronCircleRight />}
              variant="contained"
              onClick={() => navigate("/register")}
            >
              Try CoinSignalPro
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
