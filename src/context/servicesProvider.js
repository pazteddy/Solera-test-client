import { useEffect, useReducer } from "react";
import { useLocation } from "react-router";
import { services } from "../utils";
import { filterReducer } from "./filterReducer";
import { ServicesContext } from "./servicesContext";
import { servicesReducer } from "./servicesReducer";

export const ServicesProvider = ({ children }) => {
  const [data, dispatch] = useReducer(servicesReducer, []);
  const [dataFilter, dispatchFilter] = useReducer(filterReducer, []);
  let location = useLocation();

  useEffect(() => {
    dispatch({ type: "setServices", payload: services });
  }, []);

  useEffect(() => {
    if (location.pathname.slice(1) === "todos") {
      dispatchFilter({ type: "setFilter", payload: data });
    } else {
      const servicesFiltered = data.filter(
        (service) => service.service === location.pathname.slice(1)
      );
      dispatchFilter({ type: "setFilter", payload: servicesFiltered });
    }
  }, [location, data]);

  const addService = (service) => {
    dispatch({ type: "addService", payload: service });
  };

  const removeService = (id) => {
    dispatch({ type: "removeService", payload: id });
  };

  const updateService = (service) => {
    dispatch({ type: "updateService", payload: service });
  };

  const values = {
    data,
    addService,
    removeService,
    updateService,
    dataFilter,
    dispatchFilter,
  };
  return (
    <ServicesContext.Provider value={values}>
      {children}
    </ServicesContext.Provider>
  );
};
