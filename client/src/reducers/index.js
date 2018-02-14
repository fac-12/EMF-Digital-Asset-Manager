import { combineReducers } from "redux";
import assets from "./assets";
import tags from "./tags";
import searchTermFromLandingPage from "./searchFromLandingPage";
import searchTermFromDashboardPage from "./searchFromDashboardPage";
import subTags from "./subTags";
import filters from "./filters";

const rootReducer = combineReducers({
  assets,
  tags,
  searchTermFromDashboardPage,
  searchTermFromLandingPage,
  subTags,
  filters
});

export default rootReducer;
