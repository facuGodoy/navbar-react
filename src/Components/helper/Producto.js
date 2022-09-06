const productos = [
  {
    id: "01",
    nombre: "Cheesecake frutos rojos",
    precio: 500,
    categoria: "tortas",
    detalle: "Cheesecake de queso crema con frutos rojos",
    img: "./img/rojos.jpg",
  },
  {
    id: "02",
    nombre: "Chocotorta",
    precio: 400,
    categoria: "tortas",
    detalle: "Torta de chocolate con crema",
    img: "src/img/chocotorta.jpg",
  },
  {
    id: "03",
    nombre: "Pastafrola",
    precio: 350,
    categoria: "tortas",
    detalle: "Torta de hojaldre con dulce de leche/batata/membrillo",
    img: "./img/frola.jpg",
  },
  {
    id: "04",
    nombre: "Bizcochuelo de naranja",
    precio: 300,
    categoria: "tortas",
    detalle: "Bizcochuelo saborizado con naranja",
    img: "./img/naranja.jpg",
  },
  {
    id: "05",
    nombre: "Tostada Francesa",
    precio: 500,
    categoria: "tortas",
    detalle: "Tostada de pan pasado por leche y huevo, cocinado en sartén",
    img: "./img/francesa.jpg",
  },
  {
    id: "06",
    nombre: "Waffles",
    precio: 600,
    categoria: "tortas",
    detalle: "Waffles de harina de trigo, con azúcar y canela",
    img: "./img/waffle.jpg",
  },
  {
    id: "07",
    nombre: "Pancakes",
    precio: 500,
    categoria: "tortas",
    detalle:
      "Pancakes de harina y azucar, acompañado de frutos rojos, chocolate o miel",
    img: "./img/pancake.jpg",
  },
  {
    id: "001",
    nombre: "Capucchino",
    precio: 450,
    categoria: "bebidas",
    detalle: "Cafe acompañado de leche y espuma de leche",
    img: "./img/capuccino.jpg",
  },
  {
    id: "002",
    nombre: "Latte",
    precio: 450,
    " categoria": "bebidas",
    detalle:
      "Cafe espresso con leche, terminado con una fina capa de espima de leche",
    img: "./img/latte.jpg",
  },
  {
    id: "003",
    nombre: "Te",
    precio: 300,
    categoria: "bebidas",
    detalle: "infucion a base de hirbas",
    img: "./img/te.jpg",
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
