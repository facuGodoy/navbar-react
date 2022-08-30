import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting, titulo }) {
  const stock = 10;
  const inicial = 1;

  const onAdd = (resultado) => {
    alert(`Agregaste ${resultado} unidades`);
  };

  return (
    <div style={{ textAlign: "center", padding: "1.5 rem" }}>
      <h2>{greeting}</h2>
      <h3>{titulo}</h3>

      <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} />
    </div>
  );
}