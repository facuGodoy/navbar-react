import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { data } from "./helper/Producto.js";
import ItemDetail from "./ItemDetail";
import Loader from "./helper/Loader.js";
import { db } from "./helper/FireBase.js";
// import products from "./helper/Producto.js";

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const CollectionProd = collection(db, "Products");
    const refDoc = doc(CollectionProd, id);
    getDocs(refDoc).then((result) => {
      setProductDetail({ id: result.id, ...result.data() });
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  // useEffect(() => {
  //   data
  //     .then((res) => setProductDetail(res.find((item) => item.id === Number(id))))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [id]);

  return <div style={{ textAlign: "center" }}>
    {loading ? <Loader /> : <ItemDetail productDetail={productDetail} />}
  </div>;
}
