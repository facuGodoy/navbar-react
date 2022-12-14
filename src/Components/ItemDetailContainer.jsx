import React, { useState, useEffect } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./helper/Loader.js";
import { db } from "./helper/FireBase.js";

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const CollectionProd = collection(db, "Products");
    const referenceDoc = doc(CollectionProd, id);
    getDoc(referenceDoc)
      .then((result) => {
        setProductDetail({ id: result.id, ...result.data() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <div style={{ textAlign: "center" }}>{loading ? <Loader /> : <ItemDetail productDetail={productDetail} />}</div>;
}
