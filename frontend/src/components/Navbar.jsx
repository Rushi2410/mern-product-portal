import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar sx={{ maxWidth: 1100, mx: "auto", width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
            ProductPortal
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button component={RouterLink} to="/" color="inherit">Products</Button>
          {token ? (
            <>
              <Button component={RouterLink} to="/dashboard" color="inherit">Dashboard</Button>
              <Typography variant="body2" sx={{ ml: 1, mr: 1 }}>{name}</Typography>
              <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button component={RouterLink} to="/login" color="inherit">Login</Button>
              <Button component={RouterLink} to="/signup" variant="outlined">Signup</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
