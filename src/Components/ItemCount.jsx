import React, { useState } from "react";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <section style={{ margin: ".5rem" }}>
        <Button
          variant="contained"
          onClick={restar}
          size="small"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          -
        </Button>
        <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          {contador}
        </span>
        <Button
          variant="contained"
          onClick={sumar}
          size="small"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
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

ItemCount.defaultProps = {
  titulo: "Clicks",
};
