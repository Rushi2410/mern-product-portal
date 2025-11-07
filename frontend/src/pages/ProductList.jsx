import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import API from "../api";
import ProductCard from "../components/ProductCardMUI";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={2}>All Products</Typography>
      <Grid container spacing={2}>
        {products.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p._id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
