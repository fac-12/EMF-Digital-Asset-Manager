import { SEARCH_VALUE } from "./types";

export { getAllTags, getAllAssets, getAllSubTags } from "./assetsActions";
export const storeValue = (value, callback) => dispatch => {
  dispatch({ type: SEARCH_VALUE, payload: value });
  callback();
};
