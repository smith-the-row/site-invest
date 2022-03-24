import React from "react";
import { Container, Paper, Box, Typography, Grid } from "@mui/material";
import { experiences } from "./experiences";
import { IconContext } from "react-icons";

const Start = () => {
  return (
    <IconContext.Provider value={{ size: "60px" }}>
      <Container sx={{ mt: 8, mb: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="h4" component="div" textAlign="center">
              Optimise experience
            </Typography>
          </Box>
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={3}>
              {experiences.map((exp) => (
                <Grid item xs={12} md={3} key={exp.id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#131722",
                      p: 3,
                      height: "260px",
                    }}
                  >
                    <Box>{exp.icon}</Box>
                    <Box sx={{ mt: 6 }}>
                      <Typography variant="h5" textAlign="center">
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{ mt: 2 }}
                      >
                        {exp.about}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </IconContext.Provider>
  );
};

export default Start;
