import _ from "lodash";
import { GET_TAGS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
  case GET_TAGS:
    console.log("tags", action.payload);
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    break;

  default:
    return state;
  }
}
