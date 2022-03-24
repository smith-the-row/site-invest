import React, { useRef } from "react";
import { Paper, Box, Typography, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";

const TradeBox = () => {
  // get the input Ref
  const amtRef = useRef();
  const totalRef = useRef();

  // configure react toast to work on this page
  toast.configure();

  // function to show toast if the user click buy
  const buyToast = (e) => {
    e.preventDefault();
    if (!amtRef.current.value | !totalRef.current.value) {
      return toast.error("Please Enter Amount to trade", {
        position: "bottom-center",
        theme: "colored",
      });
    }
    toast.success("Buy Order has been Placed", {
      position: "bottom-center",
      theme: "colored",
    });
  };
  // function to show toast if the user clicks sell
  const sellToast = (e) => {
    e.preventDefault();

    if (!amtRef.current.value | !totalRef.current.value) {
      return toast.error("Please Enter Amount to trade", {
        position: "bottom-center",
        theme: "colored",
      });
    }
    toast.success("Sell Order has been Placed", {
      position: "bottom-center",
      theme: "colored",
    });
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "300px" },
        mt: { xs: 2, md: "0px" },
        mb: { xs: 3, md: "0px" },
      }}
    >
      <Paper sx={{ p: 2 }}>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Typography variant="h6" component="div" textAlign="center">
            Trade Now
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              color="steelblue"
              sx={{ marginRight: "3rem" }}
            >
              BUY/SELL
            </Typography>
            <Typography variant="subtitle1" color="red">
              Vaild : 0.1 BTC
            </Typography>
          </Box>
        </Box>
        <Box>
          <TextField
            label="Amt (USD)"
            type="number"
            fullWidth
            margin="normal"
            inputRef={amtRef}
          />
          <TextField
            label="Total (BTC)"
            type="number"
            fullWidth
            inputRef={totalRef}
            margin="normal"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="info" fullWidth onClick={buyToast}>
            Buy
          </Button>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ mt: 2 }}
            onClick={sellToast}
          >
            Sell
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TradeBox;
