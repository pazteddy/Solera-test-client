import { v4 as uuid } from "uuid";
import { colors } from "./assets/colors";

export const services = [
  {
    id: uuid(),
    name: "Electricidad",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "hogar",
  },
  {
    id: uuid(),
    name: "Auxilio Mecánico",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "autos",
  },
  {
    id: uuid(),
    name: "Chofer reemplazo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "autos",
  },
  {
    id: uuid(),
    name: "Medico a domicilio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "salud",
  },
  {
    id: uuid(),
    name: "Ambulancia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "salud",
  },
  {
    id: uuid(),
    name: "Gasfitero",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    animationIterationCount: "infinite",
    service: "hogar",
  },
  {
    id: uuid(),
    name: "Compras",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "otros",
  },
];
export const types = [
  {
    name: "todos",
    to: "todos",
  },
  {
    name: "autos",
    to: "autos",
  },
  {
    name: "salud",
    to: "salud",
  },
  {
    name: "hogar",
    to: "hogar",
  },
  {
    name: "otros",
    to: "otros",
  },
];

export const typesServicesArray = types.map((type) => {
  if (type.name !== "todos") {
    return type.name;
  }
});
