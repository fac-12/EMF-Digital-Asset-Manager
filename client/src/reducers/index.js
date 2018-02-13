import { combineReducers } from "redux";
import assets from "./assets";
import tags from "./tags";
import search from "./search";
import subTags from "./subTags";
import filters from "./filters";

const rootReducer = combineReducers({
  assets,
  tags,
  search,
  subTags,
  filters
});

export default rootReducer;
