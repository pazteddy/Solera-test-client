import { useEffect, useReducer } from "react";
import { services } from "../utils";
import { ServicesContext } from "./servicesContext";
import { servicesReducer } from "./servicesReducer";

export const ServicesProvider = ({ children }) => {
  const [data, dispatch] = useReducer(servicesReducer, []);

  useEffect(() => {
    dispatch({ type: "setServices", payload: services });
  });

  const addService = (service) => {
    dispatch({ type: "addService", payload: service });
  };

  const removeService = (id) => {
    dispatch({ type: "removeService", payload: id });
  };

  const updateService = (service) => {
    dispatch({ type: "updateService", payload: service });
  };

  const values = { data, addService, removeService, updateService };
  return (
    <ServicesContext.Provider value={values}>
      {children}
    </ServicesContext.Provider>
  );
};
