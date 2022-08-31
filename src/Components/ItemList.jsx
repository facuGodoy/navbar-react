import React from "react";

export default function ItemList() {
  const producto = new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          nombre: "Producto 1",
          precio: 100,
          stock: 10,
        },
      ]);
    }, 2000);
    rej("Por el momento no hay Stock disponible");
  });

  producto.then(resultado => {
    console.log(resultado);
  })

  return (
    <>
      
    </>
  );
}
