import React from "react";
import { Box } from "@mui/material";
import TradeBox from "../dashboard/TradeBox";
import { TickerTape } from "react-tradingview-embed";
import { symbols } from "../dashboard/coins";
import Crypto from "../dashboard/Crypto";

const MarketLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ flexGrow: "1", mr: 1 }}>
          <Box sx={{ mb: 2 }}>
            <TickerTape widgetProps={{ symbols: symbols }} />
          </Box>
          <Box sx={{ height: "800px" }}>
            <Crypto />
          </Box>
        </Box>
        <Box>
          <TradeBox />
        </Box>
      </Box>
    </>
  );
};

export default MarketLayout;
