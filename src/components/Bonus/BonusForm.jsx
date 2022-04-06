import React, { useRef, useContext } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";

const BonusForm = () => {
  // configure toast
  toast.configure();
  // ref
  const amtRef = useRef();
  const addressRef = useRef();
  const methodRef = useRef();

  // use the react router Hook
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  // handle form submission
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "withdraws"
      );

      if (
        !addressRef.current.value |
        !methodRef.current.value |
        !amtRef.current.value
      ) {
        toast.error("Please Fill out the correct form", {
          theme: "colored",
          position: "bottom-center",
        });
      }

      await addDoc(collectionRef, {
        method: methodRef.current.value,
        address: addressRef.current.value,
        amount: amtRef.current.value,
        approved: false,
        date: serverTimestamp(),
      });

      toast.success("Request Submitted", {
        theme: "colored",
        position: "top-center",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Fill Withdrawal form
        </Typography>
        <Divider />

        <TextField
          label="Amount"
          fullWidth
          margin="normal"
          inputRef={amtRef}
          type="number"
        />
        <TextField
          label="Enter Address"
          fullWidth
          margin="normal"
          inputRef={addressRef}
          sx={{ mb: 2 }}
          type="text"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Payout Method</InputLabel>
          <Select label="Payout Method" inputRef={methodRef}>
            <MenuItem value="Bitcoin">Bitcoin</MenuItem>
            <MenuItem value="Ethereum">Ethereum</MenuItem>
            <MenuItem value="USDT">USDT</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          color="success"
          fullWidth
          sx={{ mt: 2 }}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default BonusForm;
