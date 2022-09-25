import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./context/CartContext";


export default function Cart() {
  const store = useNavigate();
  const { cart, clear, cartTotal } = useContext(CartContext);

  return (
    <div className="outlined">
      {!cart.length ? (
        <div>
          <h2>Carrito vacío...!</h2>
          <h4>Te invitamos a que veas nustros productos!</h4>
          <Button variant="contained" color="success" onClick={() => store("/")}>
            Ir a comprar..!
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".5rem" }}>
          <h2>Tu carrito de compras</h2>
          {cart.map((compra) => (
            <CartItem compra={compra} key={compra.id} />
          ))}
          <span>Total a pagar: ${cartTotal()}</span>
          <Button variant="contained" color="secondary" onClick={clear}>
            borrar
          </Button>
          <Button variant="contained" color="success" onClick={() =>store('/checkout')}>
            Terminar compra
          </Button>
        </div>
      )}
      
    </div>
  );
}
