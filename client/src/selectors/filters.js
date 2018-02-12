import { createSelector } from "reselect";

const assetSelector = state => state.assets;
const selectedSubTag = state => state.subTags;
const selectedTagGroup = state => state.tags;
