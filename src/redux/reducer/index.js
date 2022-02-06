import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";
import { oneCountryReducer } from "./oneCountryReducer";
import { keywordReducer } from "./keywordReducer";

const rootReducer = combineReducers({
  keywordReducer,
  countriesReducer,
  oneCountryReducer,
});

export default rootReducer;
