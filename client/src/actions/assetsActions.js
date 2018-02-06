import axios from "axios";
import { GET_TAGS, GET_ASSETS } from "./types";

export const getAllTags = () => async dispatch => {
  try {
    const tags = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://staging.circulareconomy.space/api/tags/`
    );
    dispatch({ type: GET_TAGS, payload: tags.data });
  } catch (e) {
    console.log(e);
  }
};

export const getAllAssets = () => async dispatch => {
  try {
    const assets = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://staging.circulareconomy.space/api/assets/`
    );
    dispatch({ type: GET_ASSETS, payload: assets.data });
  } catch (e) {
    console.log(e);
  }
};
