import mesh from "../imagenes/planes/mesh.png";
import conectyTv from "../imagenes/planes/conectyTv.png";
import fibraColor from "../imagenes/planes/fibra.png";
import fibraBlanco from "../imagenes/planes/fibraBlanco.png";

export const internetPlanes = [
  {
    id: 1,
    tipo: "A",
    velocidad: 350,
    precio: 49,
    incluye: [fibraColor],
    texto: "100% fibra óptica"
  },

  {
    id: 2,
    tipo: "A",
    velocidad: 700,
    precio: 29,
    regular: 59,
    texto: "100% fibra óptica",
    promo: "X3 MESES",

    incluye: [fibraColor],
  },

  {
    id: 3,
    tipo: "B",
    velocidad: 850,
    precio: 45,
    regular: 89,
    promo: "X3 MESES",
    texto: "mesh",

    incluye: [mesh],
  },

  {
    id: 4,
    tipo: "B",
    velocidad: 1000,
    precio: 65,
    regular: 129,
    promo: "X3 MESES",
    texto: "mesh",

    incluye: [mesh],
  },
];

export const internetTvPlanes = [
  {
    id: 5,
    tipo: "A",
    velocidad: 450,
    precio: 69,

    incluye: [
      conectyTv,
      fibraBlanco,
    ],
  },

  {
    id: 6,
    tipo: "A",
    velocidad: 750,
    precio: 45,
    regular: 89,
    promo: "X3 MESES",

    incluye: [
      conectyTv,
      fibraBlanco
    ],
  },

  {
    id: 7,
    tipo: "B",
    velocidad: 900,
    precio: 60,
    regular: 119,
    promo: "X3 MESES",

    incluye: [
      conectyTv,
      fibraBlanco,
      mesh
    ],
  },

  {
    id: 8,
    tipo: "B",
    velocidad: 1000,
    precio: 80,
    regular: 150,
    promo: "X3 MESES",

    incluye: [
      conectyTv,
      fibraBlanco,
      mesh
    ],
  },
];