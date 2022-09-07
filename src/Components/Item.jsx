import React from "react";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button, CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import ItemCount from "./ItemCount";

export default function Item({ product }) {
  const { name, description, price, img, id, stock } = product;
  const navigate = useNavigate();
  
  return (
    <Card sx={{ maxWidth: 345, height: 600, padding: ".5rem", margin: "1rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          width="600"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body3">Precio: $ {price}</Typography>
          <Typography variant="body3"> Stock:  {stock}</Typography>
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
        <Button endIcon={<SearchIcon variant="icons" />} color="success" variant="contained" onClick={() => navigate(`/detail/${id}`)}>
          Ver mas 
        </Button>
      </CardActions>
    </Card>
  );
}
