import { ActionsType, KeyValueAnyType } from "../../types";

type InitialCountriesState = {
  countries: KeyValueAnyType;
};

const initialState: InitialCountriesState = {
  countries: [],
};
export function countriesReducer(
  state = initialState,
  action: ActionsType
): InitialCountriesState {
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
