import React from 'react';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import ItemCount from "./ItemCount";

export default function ItemDetail({ productDetail }) {
  const { name, description, price, img, stock } = productDetail;

  const onAdd = () => { 
    console.log("agreste un producto");
  };
  return (
    <Card
      sx={{ display: 'flex', flexDirection:'column' ,maxWidth: 300, padding: ".5rem", margin: "1rem" }}
      align="center"
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">
            Detalle del Producto:{name}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6">
            price: $ {price}
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
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </CardActions>
    </Card>
  );
}
