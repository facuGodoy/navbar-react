import Item from "./Item";
import "./styles/ItemList.css";

export default function ItemList({ listProducts }) {
  // const producto = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res([
  //       {
  //         nombre: "Producto 1",
  //         precio: 100,
  //         stock: 10,
  //       },
  //     ]);
  //   }, 2000);
  //   rej("Por el momento no hay Stock disponible");
  // });

  // producto.then((resultado) => {
  //   console.log(resultado);
  // });

  return (
    <>
      <div className="cardContainer">
        {listProducts.map((product) => {
          return <Item key={product.id} producto={product} />;
        })}
      </div>
    </>
  );
}
