import React from "react";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button, CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ItemCount from "./ItemCount";

export default function Item({ producto }) {
  const { nombre, descripcion, precio, img, id, stock } = producto;
  const navigate = useNavigate();
  
  return (
    <Card sx={{ maxWidth: 345, padding: ".5rem", margin: "1rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          width="600"
          image={img}
          alt={nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="body3">Precio: $ {precio}</Typography>
          <Typography variant="body3"> Stock: $ {stock}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <ItemCount stock={producto.stock} initial={1} onAdd={ onAdd} /> */}
        <Button color="success" variant="contained" onClick={() => navigate(`/detalle/${id}`)}>
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
}
