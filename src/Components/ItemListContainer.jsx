import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
// import { data } from "./helper/Producto.js";
import { useParams } from "react-router-dom";
import Loader from "./helper/Loader";
import "./styles/ItemListContainer.css";
import { db } from "./helper/FireBase";
// import { FetchData } from "./helper/FetchData";
// import ItemCount from "./ItemCount";

export default function ItemListContainer() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productos = categoryId ? query(collection(db, "Products"), where("category", "==", categoryId)) : collection(db, "Products");
    getDocs(productos)
      .then((result) => {
        const data = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProductList(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  // useEffect(() => {
  //   setLoading(true);
  //   data
  //     .then((res) => {
  //       if (categoryId) {
  //         setProductList(res.filter((item) => item.category === categoryId));
  //       } else {
  //         setProductList(res);
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [ categoryId ]);

  return (
    <div className="contenedorItems" style={{ textAlign: "center", padding: "1.5 rem" }}>
      {loading ? <Loader /> : <ItemList productList={productList} />}
    </div>
  );
}
