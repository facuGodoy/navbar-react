import React, { useContext } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconButton } from "@mui/material";
import { CartContext } from "./context/CartContext";

export default function CartWidget() {
  const { cartQuantity, cart } = useContext(CartContext);
  return (
    <IconButton aria-label="cart">
      <LocalMallIcon style={{ color: "#000", width: "3rem", height: "3rem" }} />
      <span style={{ color: "#f4f4f2" }}>{!cart.lenght ? cartQuantity() : ''}</span>
    </IconButton>
  );
}