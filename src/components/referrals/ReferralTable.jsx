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
import { getDocs, collection, addDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import moment from "moment";

const ReferralTable = () => {
  const [referrers, setReferrers] = useState([]);

  const { user } = useContext(UserContext);

  const addReferral = async () => {
    const collectionRef = collection(
      store,
      "users",
      `${user.email}`,
      "referred"
    );

    await addDoc(collectionRef, {
      referrers,
    });
  };

  useMemo(() => {
    async function fetchUsers() {
      const usersRef = collection(store, "users");

      const users = await getDocs(usersRef);
      const referred = [];
      users.forEach(async (user) => {
        referred.push(user.data());
      });

      const referredUsers = referred.filter((u) => user.uid === u.referrer);
      setReferrers(referredUsers);
    }

    fetchUsers();

    // eslint-disable-next-line
  }, [user.uid]);

  setTimeout(() => {
    addReferral();
  }, 4000);

  return (
    <Box sx={{ mt: 8 }}>
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
