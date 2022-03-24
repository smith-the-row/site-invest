import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MarketPage = () => {
  const tradingRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 490,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "dark",
      locale: "en",
    });
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";

    tradingRef.current.appendChild(script);
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          m: "auto",
          mt: 2,
        }}
      >
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            textAlign="center"
          >
            Current Market Prices{" "}
          </Typography>
        </Box>
        <div class="tradingview-widget-container" ref={tradingRef}>
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/">
              <span class="blue-text">Cryptocurrency Markets</span>
            </a>{" "}
            by TradingView
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default MarketPage;
