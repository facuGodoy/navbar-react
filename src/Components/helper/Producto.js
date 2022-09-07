const products = [
  {
    id: 1,
    name: "Cheesecake frutos rojos",
    price: 500,
    category: "tortas",
    detail: "Cheesecake de queso crema con frutos rojos",
    img: "./img/rojos.jpg",
    stock: 10,
  },
  {
    id: 2,
    name: "Chocotorta",
    price: 400,
    category: "tortas",
    detail: "Torta de chocolate con crema",
    img: "./img/choco.jpg",
    stock: 10,
  },
  {
    id: 3,
    name: "Pastafrola",
    price: 350,
    category: "tortas",
    detail: "Torta de hojaldre con dulce de leche/batata/membrillo",
    img: "./img/frola.jpg",
    stock: 10,
  },
  {
    id: 4,
    name: "Bizcochuelo de naranja",
    price: 300,
    category: "tortas",
    detail: "Bizcochuelo saborizado con naranja",
    img: "./img/naranja.jpg",
    stock: 10,
  },
  {
    id: 5,
    name: "Tostada Francesa",
    price: 500,
    category: "tortas",
    detail: "Tostada de pan pasado por leche y huevo, cocinado en sartén",
    img: "./img/francesa.jpg",
    stock: 10,
  },
  {
    id: 6,
    name: "Waffles",
    price: 600,
    category: "tortas",
    detail: "Waffles de harina de trigo, con azúcar y canela",
    img: "./img/waffle.jpg",
    stock: 10,
  },
  {
    id: 7,
    name: "Pancakes",
    price: 500,
    category: "tortas",
    detail:
      "Pancakes de harina y azucar, acompañado de frutos rojos, chocolate o miel",
    img: "./img/pancake.jpg",
    stock: 10,
  },
  {
    id: 8,
    name: "Capucchino",
    price: 450,
    category: "bebidas",
    detail: "Cafe acompañado de leche y espuma de leche",
    img: "./img/capuccino.jpg",
    stock: 5,
  },
  {
    id: 9,
    name: "Latte",
    price: 450,
    category: "bebidas",
    detail:
      "Cafe espresso con leche, terminado con una fina capa de espima de leche",
    img: "./img/latte.jpg",
    stock: 5,
  },
  {
    id: 10,
    name: "Te",
    price: 300,
    category: "bebidas",
    detail: "infucion a base de hirbas",
    img: "./img/te.jpg",
    stock: 5,
  },
];

export const data = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(products);
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
