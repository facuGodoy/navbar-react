const products = [
  {
    id: 1,
    name: "Cheesecake frutos rojos",
    price: 500,
    category: "tortas",
    detail: "Cheesecake de queso crema con frutos rojos",
    img: "https://i.postimg.cc/rpXCvDJz/rojos.jpg",
    stock: 10,
  },
  {
    id: 2,
    name: "Chocotorta",
    price: 400,
    category: "tortas",
    detail: "Torta de chocolate con crema",
    img: "https://i.postimg.cc/x1rzdWb4/choco.jpg",
    stock: 10,
  },
  {
    id: 3,
    name: "Pastafrola",
    price: 350,
    category: "tortas",
    detail: "Torta de hojaldre con dulce de leche/batata/membrillo",
    img: "https://i.postimg.cc/xdnNvM5G/frola.jpg",
    stock: 10,
  },
  {
    id: 4,
    name: "Bizcochuelo de naranja",
    price: 300,
    category: "tortas",
    detail: "Bizcochuelo saborizado con naranja",
    img: "https://i.postimg.cc/JhxDP0Yf/naranja.jpg",
    stock: 10,
  },
  {
    id: 5,
    name: "Tostada Francesa",
    price: 500,
    category: "tortas",
    detail: "Tostada de pan pasado por leche y huevo, cocinado en sartén",
    img: "https://i.postimg.cc/LX0qF7pv/francesa.jpg",
    stock: 10,
  },
  {
    id: 6,
    name: "Waffles",
    price: 600,
    category: "tortas",
    detail: "Waffles de harina de trigo, con azúcar y canela",
    img: "https://i.postimg.cc/ry3dhvgw/waffle.jpg",
    stock: 10,
  },
  {
    id: 7,
    name: "Pancakes",
    price: 500,
    category: "tortas",
    detail: "Pancakes de harina y azucar, acompañado de frutos rojos, chocolate o miel",
    img: "https://i.postimg.cc/m29PK86N/pancake.jpg",
    stock: 10,
  },
  {
    id: 8,
    name: "Capucchino",
    price: 450,
    category: "bebidas",
    detail: "Cafe acompañado de leche y espuma de leche",
    img: "https://i.postimg.cc/26J5KZQK/capuccino.jpg",
    stock: 5,
  },
  {
    id: 9,
    name: "Latte",
    price: 450,
    category: "bebidas",
    detail: "Cafe espresso con leche, terminado con una fina capa de espima de leche",
    img: "https://i.postimg.cc/4y93kxwN/latte.jpg",
    stock: 5,
  },
  {
    id: 10,
    name: "Te",
    price: 300,
    category: "bebidas",
    detail: "infucion a base de hirbas",
    img: "https://i.postimg.cc/8sgz1gnd/te.jpg",
    stock: 5,
  },
  {
    id: 16,
    name: "Jugo de naranja",
    price: 300,
    category: "bebidas",
    detail: "sumo de naranja natural recien exprimida ",
    img: "https://i.postimg.cc/2SLhCn8r/jugo-naranja.jpg",
    stock: 5,
  },
  {
    id: 11,
    name: "Batido de chocolate",
    price: 300,
    category: "batidos",
    detail: "batido fresco de chocolate y leche",
    img: "https://i.postimg.cc/QCJyMR8G/batido-choco.jpg",
    stock: 5,
  },
  {
    id: 12,
    name: "Batido de frutos rojos",
    price: 300,
    category: "batidos",
    detail: "batido refrescante de frutos rojos y leche",
    img: "https://i.postimg.cc/W1LdVCDb/batido-rojos.jpg",
    stock: 5,
  },
  {
    id: 13,
    name: "Batido de oreo",
    price: 300,
    category: "batidos",
    detail: "batido refrescante a base de oreo y leche",
    img: "https://i.postimg.cc/bNNhtRKH/batido-oreo.jpg",
    stock: 5,
  },
  {
    id: 14,
    name: "Batido de frutillas",
    price: 300,
    category: "batidos",
    detail: "batido refrescante a base frutillas frescas y leche",
    img: "https://i.postimg.cc/MpMg73tR/batido-frutillas.jpg",
    stock: 5,
  },
  {
    id: 15,
    name: "Milkshake de chocolate",
    price: 300,
    category: "batidos",
    detail: "El Milkshake de chocolate es un batido de chocolate con helado y leche",
    img: "https://i.postimg.cc/kM2Z3p3H/milk-shake.jpg",
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
