import { combineReducers } from "redux";
import assets from "./assets";
import tags from "./tags";
import search from "./search";
import subTags from "./subTags";

const rootReducer = combineReducers({
  assets,
  tags,
  subTags,
  search
});

export default rootReducer;
