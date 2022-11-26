import { colors } from "./assets/colors";

export const services = [
  {
    id: 1,
    title: "Electricidad",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "Hogar",
  },
  {
    id: 2,
    title: "Auxilio Mecánico",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "autos",
  },
  {
    id: 3,
    title: "Chofer reemplazo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "autos",
  },
  {
    id: 4,
    title: "Medico a domicilio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "salud",
  },
  {
    id: 5,
    title: "Ambulancia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    service: "salud",
  },
  {
    id: 6,
    title: "Gasfitero",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    animationIterationCount: "infinite",
    service: "hogar",
  },
];
export const types = [
  {
    name: "Todos",
    to: "todos",
  },
  {
    name: "Hogar",
    to: "hogar",
  },
  {
    name: "Salud",
    to: "salud",
  },
  {
    name: "Mascotas",
    to: "mascotas",
  },
  {
    name: "Otros",
    to: "otros",
  },
];

export const typesServicesArray = types.map((type) => {
  return type.name;
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
