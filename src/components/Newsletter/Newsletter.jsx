import React, { useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const Newsletter = () => {
  const emailRef = useRef();

  toast.configure();

  const subscribeNewsletter = (e) => {
    e.preventDefault();
    if (!emailRef.current.value) {
      return toast.error("Please enter your Email", {
        position: "bottom-right",
        theme: "colored",
      });
    } else {
      return toast.info("Thanks for subscribing", {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Container sx={{ mt: 5, mb: 8 }}>
        <Box>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                textAlign="center"
              >
                Subscribe to our Newsletter
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                textAlign="center"
              >
                subscribe to our newsletter to get our latest information
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: { xs: "100%", md: "60%" },
                m: "auto",
              }}
            >
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                fullWidth
                inputRef={emailRef}
              />
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={subscribeNewsletter}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Newsletter;
