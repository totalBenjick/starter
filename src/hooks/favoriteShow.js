export const favReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((id) => id !== action.payload);

    default:
      return state;
  }
};
