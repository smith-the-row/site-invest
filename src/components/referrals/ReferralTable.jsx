import React, { useMemo, useContext, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { getDocs, collection } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import moment from "moment";

const ReferralTable = () => {
  const [referrers, setReferrers] = useState([]);

  const { user } = useContext(UserContext);

  useMemo(() => {
    async function fetchUsers() {
      const usersRef = collection(store, "users");
      const users = await getDocs(usersRef);
      const referred = [];
      users.forEach((user) => referred.push(user.data()));
      const referredUsers = referred.filter((u) => user.uid === u.referrer);
      setReferrers(referredUsers);
    }

    fetchUsers();
  }, [user.uid]);

  console.log(referrers);

  return (
    <Box sx={{ mt: 8, display: { xs: "none", md: "block" } }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="div" gutterBottom>
            You Referred
          </Typography>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Date Registered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referrers.map((ref) => (
                <TableRow key={ref.name}>
                  <TableCell>{ref.name}</TableCell>
                  <TableCell align="center">
                    {" "}
                    {moment(ref.createdAt).format("YYYY/MM/DD")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ReferralTable;
