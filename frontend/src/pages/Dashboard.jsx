import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import API from "../api";
import ProductCard from "../components/ProductCardMUI";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const userId = localStorage.getItem("userId");

  const load = async () => {
    try {
      const { data } = await API.get("/products");
      const my = data.filter(p => {
        const pid = p.user ? (p.user._id || p.user) : null;
        return String(pid) === String(userId);
      });
      setProducts(my);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { load(); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const create = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await API.post("/products", { name: form.name, price: Number(form.price), description: form.description });
      setForm({ name: "", price: "", description: "" });
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
    }
  };

  const startEdit = p => {
    setEditingId(p._id);
    setForm({ name: p.name, price: p.price, description: p.description });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ name: "", price: "", description: "" });
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/products/${editingId}`, { name: form.name, price: Number(form.price), description: form.description });
      cancelEdit();
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete item?")) return;
    try {
      await API.delete(`/products/${id}`);
      load();
    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" mb={2}>{editingId ? "Edit product" : "Create product"}</Typography>
        <form onSubmit={editingId ? update : create}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth name="name" label="Name" value={form.name} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth name="price" label="Price" type="number" value={form.price} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3} sx={{ display: "flex", alignItems: "center" }}>
              <Button variant="contained" type="submit">{editingId ? "Update" : "Create"}</Button>
              {editingId && <Button sx={{ ml: 2 }} variant="outlined" onClick={cancelEdit}>Cancel</Button>}
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth name="description" label="Description" value={form.description} onChange={handleChange} multiline rows={2} />
            </Grid>
            {error && <Grid item xs={12}><Typography color="error">{error}</Typography></Grid>}
          </Grid>
        </form>
      </Paper>

      <Typography variant="h6" mb={2}>My Products</Typography>
      <Grid container spacing={2}>
        {products.length === 0 ? (
          <Grid item xs={12}><Paper sx={{ p: 3 }}>No products yet</Paper></Grid>
        ) : products.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p._id}>
            <ProductCard product={p} onEdit={() => startEdit(p)} onDelete={() => remove(p._id)} showActions />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
