import React from "react";
import { Box, Typography, Button } from "@mui/material";
import TradeBox from "../dashboard/TradeBox";
import { TickerTape } from "react-tradingview-embed";
import { symbols } from "../dashboard/coins";
import { useNavigate } from "react-router-dom";

const LevelLayout = () => {
  // react-router-hook
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ flexGrow: "1", mr: 1 }}>
          <Box sx={{ mb: 2 }}>
            <TickerTape widgetProps={{ symbols: symbols }} />
          </Box>
          <Box sx={{ height: "800px" }}>
            <Typography variant="h4" component="div" textAlign="center">
              Do an account Upgrade
            </Typography>

            <Typography
              variant="body1"
              component="div"
              textAlign="center"
              color="gray"
            >
              Current Level - Bronze
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                size="large"
                color="warning"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                onClick={() => navigate("/deposit/wallet")}
              >
                Sliver pack
              </Button>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                onClick={() => navigate("/deposit/wallet")}
                fullWidth
              >
                Gold pack
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <TradeBox />
        </Box>
      </Box>
    </>
  );
};

export default LevelLayout;
