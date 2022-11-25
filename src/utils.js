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
