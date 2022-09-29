import React from "react";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function ItemCount({ stock, initial, onAdd, count, setCount }) {

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <section style={{ margin: ".5rem" }}>
        <Button variant="contained" onClick={decrement} size="small" style={{ fontSize: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
          -
        </Button>
        <span style={{ fontSize: "1.2rem", marginLeft: "1rem", marginRight: "1rem" }}>{count}</span>
        <Button variant="contained" onClick={increment} size="small" style={{ fontSize: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
          +
        </Button>
      </section>
      <div>
        <Button
          endIcon={<LocalMallIcon variant="icons" />}
          color="success"
          variant="contained"
          size="medium"
          onClick={onAdd}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}