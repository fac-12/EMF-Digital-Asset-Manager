import _ from "lodash";
import { SEARCH_VALUE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case SEARCH_VALUE:
    return { ...state, searchValue: action.payload };
  default:
    return state;
  }
}
