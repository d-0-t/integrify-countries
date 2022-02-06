const initialState = {
  countries: [],
};
export function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload.countries,
      };
    default:
      return state;
  }
}
