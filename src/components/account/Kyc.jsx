import React, { useRef, useContext } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import firebase functions
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { store, bucket } from "../../firebase";

// user context
import { UserContext } from "../../context/UserContext";

const Kyc = () => {
  // configure react toast
  toast.configure();

  // react-router-dom hook
  const navigate = useNavigate();

  // use the User Context
  const { user } = useContext(UserContext);
  // ref to the HTML element

  const addressRef = useRef();
  const imgRef = useRef();

  // function to upload document
  const uploadDocument = async () => {
    try {
      // eslint-disable-next-line no-use-before-define
      const file = imgRef.current.files[0];

      if (!file | !addressRef.current.value) {
        toast.error("Please fill out the form correctly", {
          theme: "colored",
          position: "bottom-center",
        });
      }
      const imgRefs = ref(bucket, `Kyc-Document/${file.name}`);
      await uploadBytes(imgRefs, file);
      const imgSrc = await getDownloadURL(imgRefs);
      // user docRef
      const userRef = doc(store, "/users", `${user.email}`);
      await updateDoc(userRef, {
        address: addressRef.current.value,
        kycDocument: imgSrc,
      });

      toast.success("Kyc Details Uploaded", {
        theme: "colored",
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Could Not Upload Image", {
        theme: "colored",
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="h4" textAlign="center" component="div">
              Complete Customer Kyc
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mt: 1, mb: 1 }}>
              <Typography variant="subtitle1" component="p" textAlign="center">
                Upload any of the following document:Worker ID,Drivers License
                or Any Legal document confirming your name and profile Picture
              </Typography>
            </Box>
            <TextField
              type="text"
              label="Enter Address"
              inputRef={addressRef}
              variant="outlined"
              margin="normal"
            />
            <TextField
              type="file"
              label="upload document"
              inputRef={imgRef}
              variant="outlined"
              margin="normal"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="success"
              onClick={uploadDocument}
            >
              Upload Details
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Kyc;
