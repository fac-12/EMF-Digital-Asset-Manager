import { SEARCH_VALUE_DASHBOARDPAGE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_VALUE_DASHBOARDPAGE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
}
