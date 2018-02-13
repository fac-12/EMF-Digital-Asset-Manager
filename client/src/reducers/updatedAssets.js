import { ASSET_UPDATE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ASSET_UPDATE:
      if (action.payload) {
        return action.payload;
      }
      break;

    default:
      return state;
  }
}
