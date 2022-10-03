import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./context/CartContext";


export default function Cart() {
  const store = useNavigate();
  const { cart, clear, cartTotal } = useContext(CartContext);


  return (
    <div className="">
      <div className="outlined">
        {!cart.length ? (
          <div className="cartVacio">
            <Typography variant="h4" style={{ textDecoration: "underline", padding: ".5rem" }}>
              Carrito vacío...!
            </Typography>
            <Typography variant="h5" style={{ padding: ".5rem" }}>
              Te invitamos a que veas nustros productos!
            </Typography>
            <Button variant="contained" color="success" onClick={() => store("/")}>
              Ir a comprar..!
            </Button>
          </div>
        ) : (
          <div className="itemCart" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".5rem" }}>
            <h2>Tu carrito de compras</h2>
            {cart.map((compra) => (
              <CartItem compra={compra} key={compra.id} />
            ))}
            <span>Total a pagar: ${cartTotal()}</span>
            <Box style={{padding:'.5rem', margin:'0.5rem'}}>
              <Button className="itemCenter" style={{ fontSize: ".5rem" }} variant="contained" color="secondary" onClick={clear}>
                vaciar carrito
              </Button>
              <Button
                className="itemCenter"
                style={{ fontSize: ".5rem" }}
                variant="contained"
                color="success"
                onClick={() => store("/checkout")}
              >
                Terminar compra
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
