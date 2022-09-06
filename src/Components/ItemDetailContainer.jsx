import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./helper/Producto.js";
import ItemDetail from "./ItemDetail";
import Loader from "./helper/Loader.js";

export default function ItemDetailContainer() {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    data
      .then((res) => setDetalle(res.find((item) => item.id === id)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader/>
      ) : (
        <ItemDetail producto={detalle} />
      )}
    </div>
  );
}
