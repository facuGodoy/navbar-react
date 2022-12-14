import React from "react";
import Item from "./Item";
import "./styles/ItemList.css";

export default function ItemList({ productList }) {
  return (
    <>
      <div className="cardContainer">
        {productList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}