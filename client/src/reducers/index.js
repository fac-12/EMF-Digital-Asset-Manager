import { combineReducers } from "redux";
import assets from "./assets";
import tags from "./tags";
import search from "./search";
import subTags from "./subTags";

const rootReducer = combineReducers({
  assets,
  tags,
  search,
  subTags
});

export default rootReducer;
