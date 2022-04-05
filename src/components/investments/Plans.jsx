import React, { useContext, useState, useRef } from "react";
import {
  Box,
  Paper,
  Button,
  Typography,
  Divider,
  Grid,
  Container,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from "@mui/material";
import { plans } from "../Plans/plans";
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

// style for the Modals
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Plans = () => {
  toast.configure();

  // ref
  const amountRef = useRef();

  // control the state of the modal
  const [open, setOpen] = useState(false);
  const [planChoose, setPlanChoose] = useState([]);
  const handleOpen = (id) => {
    // get the plan the user clicked
    const plan = plans.filter((plan) => plan.id === id);
    setPlanChoose(plan[0]);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addInvestment = async (planType) => {
    try {
      // get the user deposit
      const docRef = doc(store, "/users", `${user.email}`);
      const userDetails = await getDoc(docRef);
      const shouldInvest = parseInt(planChoose.min) > amountRef.current.value;
      if (shouldInvest === true) {
        return toast.error(
          `Amount should not be less than $${planChoose.min}`,
          {
            position: "bottom-center",
            theme: "colored",
          }
        );
      }
      if (amountRef.current.value > userDetails.data().realBalance) {
        toast.error("Please Fund Account", {
          position: "bottom-center",
          theme: "colored",
        });

        navigate("/deposit");
      } else {
        // update document
        const collectionRef = collection(
          store,
          "users",
          `${user.email}`,
          "investment"
        );

        await addDoc(collectionRef, {
          date: serverTimestamp(),
          amount: amountRef.current.value,
          plan: planChoose.type,
          returns: planChoose.Roi,
        });

        await updateDoc(docRef, {
          realBalance: userDetails.data().realBalance - amountRef.current.value,
          activePlan: planChoose.type,
          investment: amountRef.current.value,
        });

        toast.info("Request Submitted", {
          theme: "colored",
          position: "top-center",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Box>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              textAlign="center"
              gutterBottom
            >
              Choose a trading plan
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={3}>
              {plans.map((plan) => (
                <Grid item xs={12} md={6} key={plan.id}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="body1"
                      gutterBottom
                      textAlign="center"
                      component="p"
                    >
                      {plan.type}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="h4"
                      textAlign="center"
                      sx={{ mt: 2 }}
                      gutterBottom
                    >
                      {plan.amount}
                    </Typography>
                    <Typography textAlign="center" variant="body1" gutterBottom>
                      Duration: {plan.duration}
                    </Typography>
                    <Typography textAlign="center" variant="body1" gutterBottom>
                      ROI: {plan.Roi}
                    </Typography>
                    <Divider />
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                      onClick={() => handleOpen(plan.id)}
                    >
                      Start Now
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              gutterBottom
              textAlign="center"
            >
              Enter an Amount
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="subtitle1"
              component="h2"
              gutterBottom
              textAlign="center"
            >
              Amount should not be less than {`$${planChoose.min}`}
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Enter Amount"
                sx={{ mt: 5, mb: 2 }}
                type="number"
                inputRef={amountRef}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => addInvestment(planChoose.type)}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Plans;
