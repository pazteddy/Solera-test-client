export const formReducer = (state, action) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case "setForm":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
