import router from "../imagenes/router.png";
import conectyTv from "../imagenes/conectyTv.png"

export const internetPlanes = [
  {
    id: 1,
    velocidad: 350,
    precio: 49,
    incluye: [router],
  },
  {
    id: 2,
    velocidad: 700,
    precio: 29,
    regular: 59,
    promo: "X3 MESES",
    incluye: [router],
  },
  {
    id: 3,
    velocidad: 850,
    precio: 45,
    regular: 89,
    promo: "X3 MESES",
    incluye: [router],
  },
  {
    id: 4,
    velocidad: 1000,
    precio: 65,
    regular: 129,
    promo: "X3 MESES",
    incluye: [router],
  },
];

export const internetTvPlanes = [
  {
    id: 1,
    velocidad: 450,
    precio: 69,
    regular: 89,
    promo: "INTERNET + TV",
    incluye: [conectyTv, router],
  },
  {
    id: 2,
    velocidad: 750,
    precio: 45,
    regular: 89,
    promo: "INTERNET + TV",
    incluye: [conectyTv, router],
  },
  {
    id: 3,
    velocidad: 900,
    precio: 60,
    regular: 119,
    promo: "INTERNET + TV",
    incluye: [conectyTv, router],
  },
  {
    id: 4,
    velocidad: 1000,
    precio: 80,
    regular: 150,
    promo: "INTERNET + TV",
    incluye: [conectyTv, router],
  },
];