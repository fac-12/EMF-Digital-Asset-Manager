import { SEARCH_VALUE_LANDINGPAGE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_VALUE_LANDINGPAGE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
}
