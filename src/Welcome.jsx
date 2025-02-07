import { AppBar, Toolbar, Typography, Box, Container, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Welcome() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
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
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Welcome Content */}
      <Container maxWidth="md" sx={{ textAlign: "center", height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>Welcome to Skoegle</Typography>
        
        {/* Buttons */}
        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary">Add Device</Button>
            <Button variant="contained" color="secondary">Delete</Button>
          </Box>
          <Button variant="contained" color="success">Live/Preview</Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: "center", p: 2, backgroundColor: "rgb(4,4,38)", color: "white", position: "fixed", width: "100%", bottom: 0 }}>
        © Skoegle Trademark
      </Box>
    </Box>
  );
}
