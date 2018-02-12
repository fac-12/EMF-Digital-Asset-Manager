import _ from "lodash";
import { GET_SUBTAGS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case GET_SUBTAGS:
    if (action.payload) {
      return Object.values(_.mapKeys(action.payload, "id"));
    }
    break;

  default:
    return state;
  }
}
