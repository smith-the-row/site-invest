import React from "react";
import { Box, Typography } from "@mui/material";
import TradeBox from "../dashboard/TradeBox";
import { TickerTape } from "react-tradingview-embed";
import { symbols } from "../dashboard/coins";

const NftLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ flexGrow: "1", mr: 1 }}>
          <Box sx={{ mb: 2 }}>
            <TickerTape widgetProps={{ symbols: symbols }} />
          </Box>
          <Box sx={{ height: "800px" }}>
            <Typography variant="h3" component="div" textAlign="center">
              Coming Soon ...
            </Typography>
          </Box>
        </Box>
        <Box>
          <TradeBox />
        </Box>
      </Box>
    </>
  );
};

export default NftLayout;
