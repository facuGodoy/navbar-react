import React from "react";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
// import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import ItemCount from "../ItemCount";

export default function Item({ producto }) {
  return (
    <Card sx={{ maxWidth: 345, padding:".5rem", margin: "1rem" }}>
      <CardMedia
        component="img"
        height="400"
        width="600"
        image={producto.img}
        alt={producto.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.detalle}
        </Typography>
        <Typography variant="body3">Precio: $ {producto.precio}</Typography>
      </CardContent>
      <CardActions>
        <ItemCount />
      </CardActions>
    </Card>
  );
}
