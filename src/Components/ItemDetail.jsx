import React, { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

export default function ItemDetail({ productDetail }) {
  const { name, description, price, img, stock, id } = productDetail;
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const navegateHome  = useNavigate();
  const { addItem } = useContext(CartContext);

  const onAdd = () => {
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
    <React.Fragment>
      <CssBaseline />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 300,
          padding: ".5rem",
          margin: "1rem",
        }}
        align="center"
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">Detalle del Producto:{name}</Typography>
          </CardContent>
          <CardMedia component="img" height="400" image={img} alt={name} />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {description}
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
                color="primary"
              >
                Seguir Comprando
              </Button>
              <Button
                style={{ padding: ".5rem", margin: ".5rem" }}
                onClick={() => navegateHome(`/cart`)}
                to={`/cart`}
                size="medium"
                variant="contained"
              >
                Ir al Carrito
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
