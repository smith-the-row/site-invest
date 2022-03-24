import React from "react";
import { Box } from "@mui/material";
import TradeBox from "../dashboard/TradeBox";
import WalletAddress from "../wallets/WalletAddress";

const SIgnalsLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ flexGrow: "1", mr: 1 }}>
          <Box>
            <WalletAddress />
          </Box>
        </Box>
        <Box>
          <TradeBox />
        </Box>
      </Box>
    </>
  );
};

export default SIgnalsLayout;
