import { ActionsType } from "../../types";

type InitialKeywordState = {
  keyword: string;
};

const initialState: InitialKeywordState = {
  keyword: "",
};

export function keywordReducer(state = initialState, action: ActionsType) {
  switch (action.type) {
    case "GET_KEYWORD":
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    default:
      return state;
  }
}
