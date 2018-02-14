import { SEARCH_VALUE, SELECT_FILTER } from "./types";

export { getAllAssets, getAllSubTags, getAllTags } from "./assetsActions";

export const storeValue = (value, callback) => dispatch => {
  dispatch({ type: SEARCH_VALUE, payload: value });
  callback();
};

export const setFilter = filter => dispatch => {
  dispatch({ type: SELECT_FILTER, payload: filter });
};
