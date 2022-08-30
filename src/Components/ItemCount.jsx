import React, { useState } from "react";

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
        <section style={{ margin: '.5rem' }}>
          <button onClick={restar}>-</button>
          <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            {contador}
          </span>
          <button onClick={sumar}>+</button>
        </section>
        <div>
          <button
            onClick={() => {
              onAdd(contador);
              setContador(inicial);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

ItemCount.defaultProps = {
  titulo: "Clicks",
};
