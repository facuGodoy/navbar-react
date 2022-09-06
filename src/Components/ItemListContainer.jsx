import React, { useState, useEffect } from "react";
// import { FetchData } from "./helper/FetchData";
import ItemList from "./ItemList";
import { data } from "./helper/Producto.js";
import "./styles/ItemListContainer.css";
// import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting, titulo }) {
  const [listProducts, setListProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setListProducts(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(listProducts);

  const onAdd = (resultado) => {
    alert(`Agregaste ${resultado} unidades`);
  };

  return (
    <div
      className="contenedorItems"
      style={{ textAlign: "center", padding: "1.5 rem" }}
    >
      <h1>{greeting}</h1>
      <h2>{titulo}</h2>

      <ItemList
        listProducts={listProducts}
        onAdd={onAdd}
      />
    </div>
  );
}
