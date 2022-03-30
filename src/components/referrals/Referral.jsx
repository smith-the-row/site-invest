import React, { useContext } from "react";
import { Box, Link, Paper, Typography } from "@mui/material";
import { toast } from "react-toastify";
import ReferralTable from "./ReferralTable";
import { UserContext } from "../../context/UserContext";

const Referral = () => {
  // context
  const { user } = useContext(UserContext);

  toast.configure();

  const code = user.uid;

  const handleClick = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Code Has been Copied", {
      theme: "colored",
      position: "top-center",
    });
  };

  return (
    <Box>
      <Typography variant="h5" component="div" gutterBottom>
        Refer Users
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            textAlign="center"
          >
            You can refer users by sharing your referral Code:
          </Typography>
          <Link
            type="button"
            sx={{ fontSize: "28px" }}
            onClick={() => handleClick(code)}
          >
            {code}
          </Link>
        </Box>
      </Paper>
      <ReferralTable />
    </Box>
  );
};

export default Referral;
