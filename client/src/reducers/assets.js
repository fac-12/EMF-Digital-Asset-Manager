import _ from "lodash";
import { GET_ASSETS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case GET_ASSETS:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    break;
  default:
    return state;
  }
}
