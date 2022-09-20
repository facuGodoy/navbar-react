import React from "react";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button, CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import ItemCount from "./ItemCount";

export default function Item({ product }) {
  const { name, description, price, img, id, stock } = product;
  const navigate = useNavigate();
  
  return (
    <Card sx={{ maxWidth: 345, height: 650, padding: ".5rem", margin: "1rem" }}>
      <CardActionArea>

        <RouterLink to={`/product/${id}}`}>
          <CardMedia
            component="img"
            height="400"
            width="800"
            image={img}
            alt={name}
          />
        </RouterLink>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body3">Precio: $ {price}</Typography>
          <Typography variant="body3"> Stock: {stock}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <ItemCount stock={stock} initial={1} onAdd={ onAdd } /> */}
        <Button
          style={{ marginTop: ".5rem" }}
          endIcon={<SearchIcon variant="icons" />}
          color="success"
          variant="contained"
          onClick={() => navigate(`/item/${id}`)}
        >
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
}
