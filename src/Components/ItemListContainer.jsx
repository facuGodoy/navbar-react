import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./helper/Loader";
// import { FetchData } from "./helper/FetchData";
import ItemList from "./ItemList";
import { data } from "./helper/Producto.js";
import "./styles/ItemListContainer.css";
// import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting, titulo }) {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    data
      .then((res) => {
        if (categoriaId) {
          setListProducts(res.filter((item) => item.categoria === categoriaId));
        } else {
          setListProducts(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [ categoriaId ]);

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

      {loading ? (
        <Loader />
      ) : (
        <ItemList listProducts={listProducts} onAdd={onAdd} />
      )}
    </div>
  );
}
