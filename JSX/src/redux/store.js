import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index"

export default function storeFactory() {
  const middleware = [thunk];
  const storeData = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return storeData;
}
