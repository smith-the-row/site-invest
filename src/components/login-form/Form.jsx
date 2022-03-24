import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Paper, Button, TextField, Box, Typography } from "@mui/material";

const Form = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();
  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <Typography
                  variant="h4"
                  component="div"
                  textAlign="center"
                  sx={{ color: "white" }}
                >
                  Welcome Back !
                </Typography>
              </Link>
              <Link to="/register">
                <Typography
                  textAlign="center"
                  variant="subtitle1"
                  component="p"
                >
                  Click Here to create an account
                </Typography>
              </Link>
            </Box>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                type="email"
                label="Email"
                inputRef={emailRef}
                margin="normal"
                fullWidth
              />
              <TextField
                variant="outlined"
                type="password"
                label="Password"
                inputRef={passwordRef}
                margin="normal"
                fullWidth
              />
              <Box sx={{ mb: 1, mt: 1 }}>
                <Typography
                  variant="subtitle1"
                  component="a"
                  sx={{ cursor: "pointer" }}
                  onClick={resetPassword}
                >
                  Forgot Password
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={loginUser}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Form;
