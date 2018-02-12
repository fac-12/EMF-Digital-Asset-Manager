import axios from "axios";
import { GET_TAGS, GET_ASSETS, GET_SUBTAGS } from "./types";

export const getAllTags = () => async dispatch => {
  try {
    const [tagGroups, tags, assets] = await Promise.all([
      axios.get(
        `https://cors-anywhere.herokuapp.com/http://staging.circulareconomy.space/api/tag-groups/`
      ),
      axios.get(
        `https://cors-anywhere.herokuapp.com/http://staging.circulareconomy.space/api/tags/`
      ),
      axios.get(
        `https://cors-anywhere.herokuapp.com/http://staging.circulareconomy.space/api/assets/`
      )
    ]);
    dispatch({ type: GET_TAGS, payload: tagGroups.data });
    dispatch({ type: GET_SUBTAGS, payload: tags.data });
    dispatch({ type: GET_ASSETS, payload: assets.data });
  } catch (e) {
    console.log(e);
  }
};
