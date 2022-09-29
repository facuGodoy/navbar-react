import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ productDetail }) {
  const { name, detail, price, img, stock, id } = productDetail;
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const navegateHome = useNavigate();
  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    Swal.fire("Producto agregado al carrito, ¿Deseas continuar comprando?", "", "success");
    let purchase = {
      id,
      name,
      price,
      img,
      stock,
    };
    addItem(purchase, count);
    setShowButton(true);
  };

  return (
    <Grid container justifyContent="center" alignContent="center">
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 300,
          padding: ".5rem",
          margin: "1rem",
        }}
      >
        <CardActionArea>
          <Card>
            <Typography variant="h4">{name}</Typography>
          </Card>
          <CardMedia component="img" height="400" image={img} alt={name} />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Detalle del Producto:{detail}
            </Typography>
            <Typography variant="h6">price: $ {price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {!showButton ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />
          ) : (
            <div style={{ padding: ".5rem", margin: ".5rem" }}>
              <Button
                style={{ padding: ".5rem", margin: ".5rem" }}
                onClick={() => navegateHome(`/`)}
                size="medium"
                variant="contained"
                color="success"
              >
                Seguir Comprando
              </Button>
              <Button
                style={{ padding: ".5rem", margin: ".5rem" }}
                onClick={() => navegateHome(`/cart`)}
                to={`/cart`}
                size="medium"
                variant="contained"
                color="error"
              >
                Ir al Carrito
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
