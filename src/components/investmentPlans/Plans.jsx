import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { plans } from "../Plans/plans";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ mt: 4, mb: 5 }}>
        <Container>
          <Typography
            textAlign="center"
            gutterBottom
            variant="h3"
            component="h1"
          >
            Choose A Plan
          </Typography>
          <Typography
            textAlign="center"
            gutterBottom
            variant="body1"
            component="p"
          >
            Choose a plan today and get started.
          </Typography>
          <Box sx={{ mt: 2, mb: 2 }}>
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
                      onClick={() => navigate("/register")}
                    >
                      Start Now
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Plan;
