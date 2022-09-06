import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./helper/Producto.js";
import ItemDetail from "./ItemDetail";

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
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ItemDetail producto={detalle} />
      )}
    </div>
  );
}
