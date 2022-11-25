export const servicesReducer = (state, action) => {
  switch (action.type) {
    case "setServices":
      return action.payload;
    case "addService":
      return [...state, action.payload];
    case "removeService":
      return state.filter((service) => service.id !== action.payload);
    case "updateService":
      return state.map((service) => {
        if (service.id === action.payload.id) {
          return action.payload;
        } else {
          return service;
        }
      });
    default:
      return { ...state };
  }
};
