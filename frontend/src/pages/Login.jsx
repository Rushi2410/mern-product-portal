import React, { useState } from "react";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("userId", data.user.id);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Paper sx={{ p: 4, width: 420 }}>
        <Typography variant="h5" mb={2}>Welcome back</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" margin="normal" value={form.email} onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={form.password} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Log in</Button>
          {error && <Typography color="error" mt={2}>{error}</Typography>}
        </form>
      </Paper>
    </Box>
  );
}
