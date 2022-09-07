import React from 'react';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {

  const onAdd = () => { 
    console.log("agreste un producto");
  };
  return (
    <Card
      sx={{ display: 'flex',flexDirection:'column' ,maxWidth: 300, padding: ".5rem", margin: "1rem" }}
      align="center"
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">
            Detalle del Producto:{producto.nombre}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image={producto.img}
          alt={producto.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {producto.descripcion}
          </Typography>
          <Typography variant="h6">
            Precio: $ {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      </CardActions>
    </Card>
  );
}
