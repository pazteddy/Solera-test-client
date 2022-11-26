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

export const ContainerStyleCard = (width) => {
  return `
  color: ${colors.primary};
  width: ${width};
  height: fit-content;
  border: 1px solid ${colors.tertiary};
  border-radius: 5px;
  box-shadow: 1px 4px 3px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 1px 4px 3px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 1px 4px 3px 0px rgba(0, 0, 0, 0.35);
  `;
};

export const ContainerStyleContent = `
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 30px;`;

export const ContainerStyleButton = `
  display: flex;
  gap: 20px;
  border-top: 1px solid ${colors.tertiary};
  background-color: ${colors.backgroundTertiary};
  padding: 20px 30px;
`;
