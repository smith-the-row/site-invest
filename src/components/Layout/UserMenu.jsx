import React, { useState, useContext, useMemo } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Skeleton,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase";
// user context
import { UserContext } from "../../context/UserContext";
import { auth } from "../../firebase";
import { FaChevronDown } from "react-icons/fa";

const UserMenu = () => {
  // user details form database
  const [details, setDetails] = useState(null);

  // anchor element for the menu position i.e for menu one and two
  const [firstAnchorEl, setFirstAnchorEl] = useState(null);
  const [secondAnchorEl, setSecondAnchorEl] = useState(null);

  // function to convert the state of null to a boolean value
  const open = Boolean(firstAnchorEl);
  const openSecond = Boolean(secondAnchorEl);

  // function to open the menu
  const handleClick = (event) => {
    setFirstAnchorEl(event.currentTarget);
  };

  const handleSecondClick = (event) => {
    setSecondAnchorEl(event.currentTarget);
  };

  // function to close the menu
  const handleClose = () => {
    setFirstAnchorEl(null);
  };

  const handleSecondClose = () => {
    setSecondAnchorEl(null);
  };

  // react-router-dom hook to navigate the drawer
  const navigate = useNavigate();

  // user context
  const { user } = useContext(UserContext);

  // function to logout user
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    signOut(auth);
    navigate("/");
  };

  // useEffect
  useMemo(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        setDetails(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [user.email]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          marginLeft: { xs: 2, md: "0px" },
        }}
      >
        <Box
          sx={{
            marginRight: 4,
            marginBottom: { xs: 2, md: "0px" },
            display: "flex",
            alignitems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            color="turquoise"
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          >
            Real Account
          </Typography>
          <Box sx={{ marginLeft: 1 }}>
            <FaChevronDown size="10px" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignitems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: 1 }}>
            {details ? (
              <Avatar src={details.profileImg} />
            ) : (
              <Skeleton variant="circular" width="50px" />
            )}
          </Box>
          {details ? (
            <Typography
              variant="body1"
              onClick={handleSecondClick}
              sx={{ cursor: "pointer" }}
            >
              {details.name}
            </Typography>
          ) : (
            <Skeleton variant="rectangular" width={80} height={10} />
          )}
          <Box sx={{ marginLeft: 1 }}>
            <FaChevronDown size="12px" />
          </Box>
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={firstAnchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Box>
            <Typography variant="body1" color="turquoise">
              Balance:
            </Typography>
            {details ? (
              <Typography variant="subtitle1" color="red">
                {details.realBalance.toFixed(2)}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
        </MenuItem>
        <MenuItem>
          <Link to="/transactions">
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#fff" }}
            >
              Transaction History
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/deposit">
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#fff" }}
            >
              Deposit
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/withdraw">
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#fff" }}
            >
              Withdrawal
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
      {/* second Menu */}
      <Menu
        id={"basic-menu"}
        anchorEl={secondAnchorEl}
        open={openSecond}
        onClose={handleSecondClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/account">
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#fff" }}
            >
              Account settings
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
