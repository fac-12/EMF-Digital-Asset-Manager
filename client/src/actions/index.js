import {
  SEARCH_VALUE_LANDINGPAGE,
  SEARCH_VALUE_DASHBOARDPAGE,
  SELECT_FILTER
} from "./types";

export { getAllAssets, getAllSubTags, getAllTags } from "./assetsActions";

export const storeValueFromLandingPage = (value, callback) => dispatch => {
  dispatch({ type: SEARCH_VALUE_LANDINGPAGE, payload: value });
  callback();
};

export const storeValueFromDashboardPage = value => dispatch => {
  dispatch({ type: SEARCH_VALUE_DASHBOARDPAGE, payload: value });
};

export const setFilter = filter => dispatch => {
  dispatch({ type: SELECT_FILTER, payload: filter });
};
