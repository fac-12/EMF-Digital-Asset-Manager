import { SELECT_FILTER } from "../actions/types";

export default function(state = "ALL", action) {
  switch (action.type) {
    case SELECT_FILTER:
      return action.payload;
    default:
      return state;
  }
}
