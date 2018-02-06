import { combineReducers } from "redux";
import assets from "./assets";
import tags from "./tags";
import search from "./search";

const rootReducer = combineReducers({
  assets,
  tags,
  search
});

export default rootReducer;
