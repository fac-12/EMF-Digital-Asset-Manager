import { combineReducers } from "redux";
import assets from "./assets";
import tags from "./tags";

const rootReducer = combineReducers({
  assets,
  tags
});

export default rootReducer;
