import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // list
  const lists = [
    {
      id: 1,
      text: "Home",
      location: "/",
    },
    {
      id: 2,
      text: "About",
      location: "/about",
    },
    {
      id: 3,
      text: "Market",
      location: "/marketpage",
    },
    {
      id: 4,
      text: "Start Here !!",
      location: "/register",
    },
    {
      id: 5,
      text: "Login",
      location: "/login",
    },
  ];

  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const toggleOn = () => {
    setActive(true);
  };

  const toggleOff = () => {
    setActive(false);
  };

  const listItems = () => {
    return (
      <Box>
        <List>
          {lists.map((list) => (
            <ListItem
              button
              key={list.id}
              onClick={() => navigate(list.location)}
            >
              <ListItemText primary={list.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <React.Fragment>
      <AppBar variant="outlined" position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: 1, md: 2 },
          }}
        >
          <Box>
            <Typography variant="h4" component="div">
              CoinSignalPro
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <Typography
                variant="subtitle1"
                sx={{ mr: { xs: "0px", md: 3 }, color: "white" }}
              >
                Home
              </Typography>
            </Link>
            <Link to="/about">
              <Typography
                variant="subtitle1"
                sx={{ mr: { xs: "0px", md: 3 }, color: "white" }}
              >
                About
              </Typography>
            </Link>
            <Link to="/marketpage">
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                Market
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 3 }}
              onClick={() => navigate("/register")}
            >
              start here !!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleOn}
          >
            <FaBars />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={active} onClose={toggleOff}>
        {listItems()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
