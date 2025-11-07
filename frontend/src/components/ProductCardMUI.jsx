import React from "react";
import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";

export default function ProductCardMUI({ product, onEdit, onDelete, showActions = false }) {
  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{product.description}</Typography>
      </CardContent>

      <Box sx={{ px: 2, pb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="subtitle1" color="primary">₹{product.price}</Typography>
        <Typography variant="caption">By: {product.user?.name || "Unknown"}</Typography>
      </Box>

      {showActions && (
        <CardActions>
          <Button size="small" onClick={() => onEdit && onEdit(product)}>Edit</Button>
          <Button size="small" color="error" onClick={() => onDelete && onDelete(product._id)}>Delete</Button>
        </CardActions>
      )}
    </Card>
  );
}
