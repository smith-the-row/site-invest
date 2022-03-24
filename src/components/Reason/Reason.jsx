import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { reasons } from "./reasons";

const Reason = () => {
  return (
    <>
      <Container sx={{ mt: "8rem" }}>
        {reasons.map((reason) => (
          <Box key={reason.id}>
            <Paper sx={{ p: 2, mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  mt: 1,
                  mb: 2,
                }}
              >
                <Box sx={{ width: "30px" }}>
                  <img
                    src={reason.img}
                    alt={reason.title}
                    style={{ color: "#f4f4f4" }}
                  />
                </Box>
                <Box sx={{ marginLeft: 2 }}>
                  <Typography variant="h5">{reason.title}</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2">{reason.about}</Typography>
              </Box>
            </Paper>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Reason;
