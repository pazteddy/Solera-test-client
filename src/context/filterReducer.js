export const filterReducer = (state, action) => {
  switch (action.type) {
    case "setFilter":
      return action.payload;
    default:
      return { ...state };
  }
};
