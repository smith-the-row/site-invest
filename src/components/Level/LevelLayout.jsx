import React, { useMemo, useContext, useState } from "react";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import TradeBox from "../dashboard/TradeBox";
import { TickerTape } from "react-tradingview-embed";
import { symbols } from "../dashboard/coins";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase";
// user context
import { UserContext } from "../../context/UserContext";

const LevelLayout = () => {
  // react-router-hook
  const navigate = useNavigate();

  // useState
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
            {details ? (
              <Typography
                variant="body1"
                component="div"
                textAlign="center"
                color="gray"
              >
                You are Current on a {details.activePlan}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                size="large"
                color="warning"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                onClick={() => navigate("/invest")}
              >
                Macro pack
              </Button>
              <Button
                size="large"
                color="success"
                variant="outlined"
                onClick={() => navigate("/invest")}
                fullWidth
              >
                Standard pack
              </Button>
              <Button
                size="large"
                color="info"
                variant="outlined"
                onClick={() => navigate("/invest")}
                fullWidth
                sx={{ mt: 2 }}
              >
                Expert pack
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
