import _ from "lodash";
import { createSelector } from "reselect";

const getAssets = state => (state.assets.length === 0 ? null : state.assets);
const getTags = state =>
  Object.keys(state.tags).length === 0 ? null : state.tags;
const getSubTags = state =>
  Object.keys(state.subTags).length === 0 ? null : state.subTags;

export const addingCategoryToAsset = createSelector(
  [getAssets, getTags, getSubTags],
  (assets, groupTag, subTags) => {
    if (assets === null || subTags === null || groupTag === null) {
      return ["hello"];
    }
    return assets.map(
      asset =>
        asset.tags.length > 0
          ? Object.assign(asset, {
            Category: Object.values(subTags)
              .map(elemSubTags =>
                Object.assign(elemSubTags, {
                  category:
                      groupTag.length === 0
                        ? {}
                        : Object.values(groupTag).filter(
                          elemGroupTags =>
                            elemSubTags.group === elemGroupTags.id
                        )[0].name
                })
              )
              .filter(subTagElem => asset.tags.includes(subTagElem.id))
              .reduce((acc, cur) => acc.concat(cur.category), [])
          })
          : asset
    );
  }
);
