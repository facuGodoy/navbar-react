import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "./helper/Producto.js";
import { useParams } from "react-router-dom";
import Loader from "./helper/Loader";
import "./styles/ItemListContainer.css";
// import { FetchData } from "./helper/FetchData";
// import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting, saludo }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    data
      .then((res) => {
        if (categoryId) {
          setProductList(res.filter((item) => item.category === categoryId));
        } else {
          setProductList(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [ categoryId ]);


  return (
    <div
      className="contenedorItems"
      style={{ textAlign: "center", padding: "1.5 rem" }}
    >
      <h1>{greeting}</h1>
      <h2>{saludo}</h2>

      {loading ? (
        <Loader />
      ) : (
        <ItemList productList={productList} />
      )}
    </div>
  );
}
