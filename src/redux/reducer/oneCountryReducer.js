const initialState = {
  country: [],
};

export function oneCountryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ONE_COUNTRY":
      return {
        ...state,
        country: action.payload.country,
      };
    default:
      return state;
  }
}
