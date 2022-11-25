export const servicesReducer = (state, action) => {
  switch (action.type) {
    case "setServices":
      return action.payload;
    case "addService":
      return [...state, action.payload];
    default:
      return { ...state };
  }
};
