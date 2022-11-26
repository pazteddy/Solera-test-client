export const formReducer = (state, action) => {
  switch (action.type) {
    case "setForm":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
