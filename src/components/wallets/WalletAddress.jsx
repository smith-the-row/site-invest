import React, { useState, useContext } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { toast } from "react-toastify";
import { wallets } from "./wallets";
import { TickerTape } from "react-tradingview-embed";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { symbols } from "../dashboard/coins";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const WalletAddress = () => {
  toast.configure();

  // react router dom hooks
  const location = useLocation();
  const navigate = useNavigate();

  // user context
  const { user } = useContext(UserContext);

  // state for the modal and the address to display
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState([]);

  // handleClose function
  const handleClose = () => {
    setOpen(false);
  };

  // function to check address
  const checkAddress = (addressId) => {
    setOpen(true);
    const name = wallets.filter((wallet) => wallet.id === addressId);
    setAddress(name[0]);
  };

  const cliptoBoard = (value, name) => {
    navigator.clipboard.writeText(value);
    toast.success(`${name} address has been copied !!`, {
      theme: "colored",
      position: "top-center",
    });
  };

  // submit function
  const handleSubmit = async (method) => {
    try {
      // update document
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "Deposits"
      );
      await addDoc(collectionRef, {
        amount: location.state,
        date: serverTimestamp(),
        approved: false,
        method: method,
      });

      toast.info("Order Sent", { theme: "colored", position: "top-center" });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Order Not Sent", {
        theme: "colored",
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Box sx={{ mt: 1, mb: 3 }}>
        <TickerTape widgetProps={{ symbols: symbols }} />
      </Box>
      <Box sx={{ width: { xs: "80%", md: "100%" }, overflow: "hidden" }}>
        <Box>
          <Typography variant="h5" component="div" gutterBottom>
            Make Payment
          </Typography>
          <Typography variant="subtitle1" component="div">
            Click your best choice of payment
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Button
              variant="outlined"
              color="warning"
              fullWidth
              onClick={() => checkAddress(1)}
            >
              Bitcoin
            </Button>

            <Button
              variant="outlined"
              color="info"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => checkAddress(2)}
            >
              Etherium
            </Button>

            <Button
              variant="outlined"
              color="success"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => checkAddress(3)}
            >
              USDT
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="payment-modal"
        aria-describedby="crypto-payment"
      >
        <Box sx={style}>
          <Box sx={{ mt: 1, mb: 2 }}>
            <Typography variant="h5" textAlign="center">
              {address.coin}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" textAlign="center" color="azure">
              Generated Address:
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              color="crimson"
              noWrap={true}
            >
              {address.address}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
              mb: 1,
            }}
          >
            <Button
              variant="contained"
              color="info"
              onClick={() => cliptoBoard(address.address, address.coin)}
            >
              Copy Address
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              mt: 2,
            }}
          >
            <Button
              onClick={() => handleSubmit(address.coin)}
              variant="contained"
              color="success"
              fullWidth
            >
              Done
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="error"
              fullWidth
              sx={{
                mt: { xs: 2, md: "0px" },
                marginLeft: { xs: "0px", md: 2 },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default WalletAddress;
