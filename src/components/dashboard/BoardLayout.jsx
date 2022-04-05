import React from "react";
import { Box } from "@mui/material";
import { symbols } from "./coins";
import { TickerTape, Ticker, AdvancedChart } from "react-tradingview-embed";
import TradeBox from "./TradeBox";
import Portfoilo from "./Portfoilo";

const BoardLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ flexGrow: "1", marginRight: "0.8rem" }}>
          <Box>
            <TickerTape
              widgetProps={{ symbols: symbols, displayMode: "compact" }}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Ticker widgetProps={{ symbols: symbols }} />
          </Box>
          <Box>
            <AdvancedChart
              widgetProps={{
                hide_side_toolbar: true,
              }}
            />
          </Box>
        </Box>
        <Box>
          <Portfoilo />
          <TradeBox />
        </Box>
      </Box>
    </>
  );
};

export default BoardLayout;
