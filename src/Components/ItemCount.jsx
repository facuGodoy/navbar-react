import React, { useState } from "react";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function ItemCount({ stock, titulo, inicial, onAdd }) {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <h2>Contador de {titulo}</h2>
        </div>
        <section style={{ margin: ".5rem" }}>
          <Button
            variant="outlined"
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
            variant="outlined"
            onClick={sumar}
            size="small"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            +
          </Button>
        </section>
        <div>
          <Button
            endIcon={<LocalMallIcon />}
            variant="contained"
            size="medium"
            onClick={() => {
              onAdd(contador);
              setContador(inicial);
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
}

ItemCount.defaultProps = {
  titulo: "Clicks",
};
