import { useEffect, useReducer } from "react";
import { useLocation } from "react-router";
import { services } from "../utils";
import { filterReducer } from "./filterReducer";
import { formReducer } from "./formReducer";
import { ServicesContext } from "./servicesContext";
import { servicesReducer } from "./servicesReducer";

export const ServicesProvider = ({ children }) => {
  // State global  to services
  const [data, dispatch] = useReducer(
    servicesReducer,
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : services
  );

  // State global to filter data from services
  const [dataFilter, dispatchFilter] = useReducer(filterReducer, []);

  // State global  to Form
  const initialForm = {
    id: null,
    name: "",
    description: "",
    service: "",
  };
  const [form, dispatchForm] = useReducer(formReducer, initialForm);

  // Get url
  let location = useLocation();

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
    initialForm,
    form,
    dispatchForm,
  };
  return (
    <ServicesContext.Provider value={values}>
      {children}
    </ServicesContext.Provider>
  );
};
