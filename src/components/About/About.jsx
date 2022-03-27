import React from "react";
import { IconContext } from "react-icons";
import { Container, Paper, Typography, Box, Grid } from "@mui/material";
import { abouts } from "./abouts";

const About = () => {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#f4f4f4", size: "2rem" }}>
        <Container sx={{ mt: 6 }}>
          <Box>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h4" textAlign="center">
                  How it works
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={3}>
                  {abouts.map((about) => (
                    <Grid item xs={12} md={4} key={about.id}>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: 2,
                            mb: 2,
                          }}
                        >
                          <Box>{about.icon}</Box>
                          <Box sx={{ ml: 2 }}>
                            <Typography variant="h6" component="h2">
                              {about.title}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="body1" textAlign="center">
                            {about.about}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default About;
