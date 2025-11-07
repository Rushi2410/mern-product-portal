import React, { useState } from "react";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await API.post("/auth/signup", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("userId", data.user.id);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Paper sx={{ p: 4, width: 420 }}>
        <Typography variant="h5" mb={2}>Create account</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" value={form.name} onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" margin="normal" value={form.email} onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={form.password} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign up</Button>
          {error && <Typography color="error" mt={2}>{error}</Typography>}
        </form>
      </Paper>
    </Box>
  );
}
