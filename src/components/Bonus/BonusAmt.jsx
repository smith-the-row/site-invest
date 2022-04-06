import React, { useContext, useMemo, useState } from "react";
import { Box, Typography, Paper, Skeleton, Divider } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";

const BonusAmt = () => {
  // user details form database
  const [details, setDetails] = useState(null);

  // user context
  const { user } = useContext(UserContext);

  // useEffect
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

  return (
    <Box>
      <Paper sx={{ p: 1 }}>
        <Box>
          <Typography variant="h5" color="gray" gutterBottom>
            Bonus
          </Typography>
          <Divider />
          {details ? (
            <Typography
              variant="h4"
              sx={{ mt: 1 }}
            >{`$${details.refBonus}`}</Typography>
          ) : (
            <Skeleton variant="text" />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default BonusAmt;
