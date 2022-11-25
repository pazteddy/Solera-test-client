import { useContext } from "react";
import { ServicesContext } from "./servicesContext";

export { ServicesProvider } from "./servicesProvider";
export const useServices = () => useContext(ServicesContext);
