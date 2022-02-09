const initialState = {
  keyword: "",
};

export function keywordReducer(state = initialState, action) {
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
