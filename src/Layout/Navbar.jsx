import { useState } from "react";
import { Button, Typography, Box, AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "rgb(4,4,38)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h6" sx={{ position: "absolute", left: 20 }}>Skoegle</Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>V-Marg</Typography>
          <Box sx={{ position: "absolute", right: 20, display: { xs: "none", md: "block" } }}>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", mr: 1 }}>Home</Button>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", mr: 1 }}>Profile</Button>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", mr: 1 }}>Admin</Button>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", mr: 1 }}>Login</Button>
            <Button variant="contained" sx={{ backgroundColor: "white", color: "rgb(4,4,38)", mr: 1 }}>Logout</Button>
            <Button variant="contained" sx={{ backgroundColor: "white", color: "rgb(4,4,38)", mr: 1 }}>Sign Up</Button>
          </Box>
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white", position: "absolute", right: 20 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
