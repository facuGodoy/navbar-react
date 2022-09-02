import React, { useState } from "react";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function ItemCount() {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => { 
    alert(`Agregaste ${contador} unidades`);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
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
              if (contador > 0) { 
                onAdd();
              };
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
