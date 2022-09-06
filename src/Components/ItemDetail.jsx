import React from 'react';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  const { nombre, descripcion, precio, img, stock } = producto;
  
  const onAdd = () => { 
    console.log("agreste un producto");
  };
  return (
    <Card sx={{ maxWidth: 300, padding: ".5rem", margin: "1rem" }} align="center">
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" >
            Detalle del Producto:{producto.nombre}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image={img}
          alt={nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="h6">Precio: $ {precio}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </CardActions>
    </Card>
  )
}
