import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./helper/Producto.js";
import ItemDetail from "./ItemDetail";
import Loader from "./helper/Loader.js";

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === id)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div style={{ textAlign: "center"}}>
      {loading ? (
        <Loader/>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
}
