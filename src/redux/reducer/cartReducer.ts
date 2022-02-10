import { ActionsType, CountryType } from "../../types";

type InitialCartState = {
  cart: CountryType[];
};

const initialState: InitialCartState = {
  cart: [],
};

export function cartReducer(state = initialState, action: ActionsType): InitialCartState {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      newCart = newCart.filter(
        (x) => JSON.stringify(action.payload.item) !== JSON.stringify(x)
      );
      return {
        ...state,
        cart: [...newCart],
      };

    default:
      return state;
  }
}
