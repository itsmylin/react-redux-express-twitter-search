import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  errors: errorReducer,
  search: searchReducer
});
