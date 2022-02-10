import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";
import { oneCountryReducer } from "./oneCountryReducer";
import { keywordReducer } from "./keywordReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  keywordReducer,
  countriesReducer,
  oneCountryReducer,
  cartReducer,
});

export default rootReducer;
