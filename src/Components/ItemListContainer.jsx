import React, { useState, useEffect } from "react";
import { FetchData } from "./helper/FetchData";
import ItemList from "./ItemList";
import productos from "./helper/Producto";
import "./styles/ItemListContainer.css";
// import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting, titulo }) {
  const [listProducts, setListProducts] = useState([]);

  const stock = 10;
  const inicial = 1;

  useEffect(() => {
    FetchData(productos)
      .then((data) => setListProducts(data));
  }, []);

  console.log(listProducts);

  const onAdd = (resultado) => {
    alert(`Agregaste ${resultado} unidades`);
  };

  return (
    <div className="contenedorItems" style={{ textAlign: "center", padding: "1.5 rem" }}>
      <h1>{greeting}</h1>
      <h2>{titulo}</h2>

      <ItemList listProducts={listProducts} stock={stock} inicial={inicial} onAdd={onAdd} />
    </div>
  );
}
