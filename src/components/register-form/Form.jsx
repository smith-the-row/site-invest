import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Typography, Box, TextField, Button, Paper } from "@mui/material";

const Form = () => {
  // toast configuration
  toast.configure();
  // navigation router hook
  const naviagte = useNavigate();
  // refs for form
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const referrerRef = useRef();

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !nameRef.current.value |
      !emailRef.current.value |
      !phoneRef.current.value |
      !passwordRef.current.value
    ) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // send verification
      sendEmailVerification(user);

      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value), {
        email: user.email,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        realBalance: 0,
        refBonus: 0,
        profit: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
        referrer: referrerRef.current.value,
      });
      // toast notification
      toast.success("Welcome to CoinSignalPro Please verify your email", {
        position: "top-center",
        theme: "colored",
      });
      // redirect user to login
      naviagte("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
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
          width: { xs: "95%", md: "60%" },
          m: "auto",
        }}
      >
        <Box sx={{ mt: 5 }}>
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
                  component="h4"
                  textAlign="center"
                  sx={{ color: "#fff" }}
                >
                  Create An Account
                </Typography>
              </Link>
              <Link to="/login">
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  component="p"
                  sx={{ mt: 1, mb: 1, cursor: "pointer" }}
                >
                  If you already have an account with us click here to login
                </Typography>
              </Link>
            </Box>
            <Box sx={{ mt: 3, mb: 1 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                color="primary"
                type="text"
                margin="normal"
                inputRef={nameRef}
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                color="primary"
                type="email"
                margin="normal"
                inputRef={emailRef}
                fullWidth
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                type="tel"
                color="primary"
                margin="normal"
                inputRef={phoneRef}
                fullWidth
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                color="primary"
                margin="normal"
                inputRef={passwordRef}
                fullWidth
              />

              <TextField
                label="Referral Code (optional)"
                variant="outlined"
                type="text"
                color="primary"
                margin="normal"
                inputRef={referrerRef}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={saveUser}
                sx={{ mt: 2 }}
              >
                Create Account
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Form;
