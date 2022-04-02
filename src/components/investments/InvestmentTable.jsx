import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { toast } from "react-toastify";

// import firebase function
import { collection, onSnapshot } from "firebase/firestore";
import { store } from "../../firebase";

// import context
import { UserContext } from "../../context/UserContext";

const InvestmentTable = () => {
  toast.configure();
  // state to manage the state of the deposit array
  const [investments, setInvestments] = useState([]);

  // get the user from the user context
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const collectionRef = collection(
          store,
          "users",
          `${user.email}`,
          "investment"
        );

        // const data = await getDocs(collectionRef);
        onSnapshot(collectionRef, (doc) => {
          doc.forEach((d) => {
            setInvestments((prevState) => [...prevState, d.data()]);
          });
        });
      } catch (error) {
        toast.error("Please Refresh Browser", {
          theme: "colored",
          position: "bottom-center",
        });
      }
    };

    fetchInvestment();
  }, [user.email]);

  return (
    <TableContainer component={Paper} sx={{ mt: 6 }}>
      {investments.length > 0 ? (
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Plan</TableCell>
              <TableCell>ROI (Monthly)</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {investments.map((investment) => (
              <TableRow
                key={investment.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {investment.amount}
                </TableCell>
                <TableCell>{investment.plan}</TableCell>
                <TableCell>{investment.returns}</TableCell>
                <TableCell>
                  {moment(investment.date.at).format("YYYY/MM/DD")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="body1" sx={{ p: 2 }} component="div">
          No investment made
        </Typography>
      )}
    </TableContainer>
  );
};

export default InvestmentTable;
