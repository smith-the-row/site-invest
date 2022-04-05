import React, { useState, useContext, useMemo } from "react";
import { Paper, Box, Typography, Skeleton, Button } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase";
// user context
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Portfoilo = () => {
  // user details form database
  const [details, setDetails] = useState(null);

  // react-router-dom hook to navigate the drawer
  const navigate = useNavigate();

  // user context
  const { user } = useContext(UserContext);

  useMemo(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        setDetails(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [user.email]);

  console.log(details);

  return (
    <Box sx={{ mb: 2 }}>
      <Paper sx={{ p: 1 }}>
        <Typography variant="h6">Your Portfolio</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Box>
            <Typography variant="body1" gutterBottom color="gray">
              Principal
            </Typography>
            {details ? (
              <Typography variant="body2">
                {details.realBalance ? `$${details.realBalance}` : `$0.00`}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
          <Box>
            <Typography variant="body1" gutterBottom color="gray">
              Profit
            </Typography>
            {details ? (
              <Typography variant="body2" textAlign="center">
                {`$${details.profit}`}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Box>
            <Typography variant="body1" gutterBottom color="gray">
              Plan
            </Typography>
            {details ? (
              <Typography variant="body2" textAlign="center">
                {details.activePlan ? details.activePlan : "None"}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
          <Box>
            <Typography variant="body1" gutterBottom color="gray">
              Available Withdrawal
            </Typography>
            {details ? (
              <Typography variant="body2" textAlign="center">
                {`$${details.withdrawalAmt}`}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => navigate("/deposit")}
        >
          Fund Account
        </Button>
      </Paper>
    </Box>
  );
};

export default Portfoilo;
