const productos = [
  {
    id: 1,
    nombre: "Cheesecake frutos rojos",
    precio: 500,
    categoria: "tortas",
    detalle: "Cheesecake de queso crema con frutos rojos",
    img: "./img/rojos.jpg",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Chocotorta",
    precio: 400,
    categoria: "tortas",
    detalle: "Torta de chocolate con crema",
    img: "./img/choco.jpg",
    stock: 10,
  },
  {
    id: 3,
    nombre: "Pastafrola",
    precio: 350,
    categoria: "tortas",
    detalle: "Torta de hojaldre con dulce de leche/batata/membrillo",
    img: "./img/frola.jpg",
    stock: 10,
  },
  {
    id: 4,
    nombre: "Bizcochuelo de naranja",
    precio: 300,
    categoria: "tortas",
    detalle: "Bizcochuelo saborizado con naranja",
    img: "./img/naranja.jpg",
    stock: 10,
  },
  {
    id: 5,
    nombre: "Tostada Francesa",
    precio: 500,
    categoria: "tortas",
    detalle: "Tostada de pan pasado por leche y huevo, cocinado en sartén",
    img: "./img/francesa.jpg",
    stock: 10,
  },
  {
    id: 6,
    nombre: "Waffles",
    precio: 600,
    categoria: "tortas",
    detalle: "Waffles de harina de trigo, con azúcar y canela",
    img: "./img/waffle.jpg",
    stock: 10,
  },
  {
    id: 7,
    nombre: "Pancakes",
    precio: 500,
    categoria: "tortas",
    detalle:
      "Pancakes de harina y azucar, acompañado de frutos rojos, chocolate o miel",
    img: "./img/pancake.jpg",
    stock: 10,
  },
  {
    id: 8,
    nombre: "Capucchino",
    precio: 450,
    categoria: "bebidas",
    detalle: "Cafe acompañado de leche y espuma de leche",
    img: "./img/capuccino.jpg",
    stock: 5,
  },
  {
    id: 9,
    nombre: "Latte",
    precio: 450,
    categoria: "bebidas",
    detalle:
      "Cafe espresso con leche, terminado con una fina capa de espima de leche",
    img: "./img/latte.jpg",
    stock: 5,
  },
  {
    id: 10,
    nombre: "Te",
    precio: 300,
    categoria: "bebidas",
    detalle: "infucion a base de hirbas",
    img: "./img/te.jpg",
    stock: 5,
  },
];

export const data = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(productos);
    } else {
      rej("Error");
    }
  }, 3000);
});

//  //Por categoria
// export const getProductsByCategory = (categoryId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos.filter((prod) => prod.categoria === categoryId));
//     }, 2000);
//   });
// };

// //  Por id
// export const getProductById = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos.find((prod) => prod.id === id));
//     }, 2000);
//   });
// };
