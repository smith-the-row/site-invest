import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  CssBaseline,
  Divider,
} from "@mui/material";
import { MdMenu, MdPowerOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { links } from "./sidebar";
import UserMenu from "./UserMenu";
import { auth } from "../../firebase";

const drawerWidth = 240;

const Layout = (props) => {
  // this is the windows prop
  const { window } = props;
  // state to open the drawer on small screens
  const [mobileOpen, setMobileOpen] = useState(false);

  // function to click and open the mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // react-router-dom hook to navigate the drawer
  const navigate = useNavigate();

  // function to logout user
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    signOut(auth);
    navigate("/");
  };

  // this is the list items
  const drawer = (
    <div>
      <List>
        {links.map((link) => (
          <ListItem
            button
            key={link.text}
            sx={{ mt: 2 }}
            onClick={() => navigate(`${link.path}`)}
          >
            <ListItemIcon sx={{ mr: 0 }}>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} sx={{ ml: 0 }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "background.default" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MdMenu />
            </IconButton>
            <Typography variant="h4" component="div">
              CoinSignalPro
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="body1" color="turquoise" textAlign="center">
              Todays PNL
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              $0.00
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <UserMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ mt: 1, mb: 2 }}>
            <UserMenu />
          </Box>
          {drawer}
          <Box>
            <List>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <MdPowerOff />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
          <Box>
            <List>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <MdPowerOff />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
