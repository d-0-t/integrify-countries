import { ActionsType, KeyValueAnyType } from "../../types";

type InitialOneCountryState = {
  country: KeyValueAnyType
};

const initialState: InitialOneCountryState = {
  country: []
};

export function oneCountryReducer(state = initialState, action: ActionsType): InitialOneCountryState {
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
