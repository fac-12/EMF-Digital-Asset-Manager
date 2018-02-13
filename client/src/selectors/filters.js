import _ from "lodash";
import { createSelector } from "reselect";

const getAssets = state => (state.assets.length === 0 ? null : state.assets);
const getTags = state =>
  Object.keys(state.tags).length === 0 ? null : state.tags;
const getSubTags = state =>
  Object.keys(state.subTags).length === 0 ? null : state.subTags;
const getFilter = state => state.filters;
const getState = state => state.search;
const addingCategoryToAsset = createSelector(
  [getAssets, getTags, getSubTags],
  (assets, groupTag, subTags) => {
    if (assets === null || subTags === null || groupTag === null) {
      return ["hello"];
    }
    return Object.values(assets).map(
      asset =>
        asset.tags.length > 0
          ? Object.assign(asset, {
              category: Object.values(subTags)
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
          : {}
    );
  }
);

const searchByTerm = createSelector(
  [getFilter, getAssets],
  (assetFilter,assets)=> {
    assets = assets.filter(asset => asset.hasOwnProperty("id"));
    if(assetFilter.searchTerm.length > 0){
      return _.filter(assets, asset =>
       asset.name
         .toLowerCase()
         .indexOf(
           (assetFilter.search.length !== 0
             ? assetFilter.search
             : state.search.searchValue || ""
           ).toLowerCase()
         ) !== -1
   )  ;
      )
    }
  }

)

export const filterAssets = createSelector(
  [getFilter, addingCategoryToAsset],
  (assetsFilters, assets) => {
    assets = assets.filter(asset => asset.hasOwnProperty("id"));
    switch (assetsFilters) {
      case "BIOCYCLE":
        return _.filter(assets, asset => asset.category.includes("BIOCYCLE"));
      case "BUILT ENVIRONMENT":
        return _.filter(assets, asset =>
          asset.category.includes("BUILT ENVIRONMENT")
        );

      case "BUSINESS":
        return _.filter(assets, asset => asset.category.includes("BUSINESS"));

      case "DESIGN":
        return _.filter(assets, asset => asset.category.includes("DESIGN"));

      case "ECONOMICS":
        return _.filter(assets, asset => asset.category.includes("ECONOMICS"));

      case "EDUCATION (LEARNING)":
        return _.filter(assets, asset =>
          asset.category.includes("EDUCATION (LEARNING)")
        );

      case "ENERGY":
        return _.filter(assets, asset => asset.category.includes("ENERGY"));

      case "FINANCE & LEGAL":
        return _.filter(assets, asset =>
          asset.category.includes("FINANCE & LEGAL")
        );

      case "GOVERNMENT":
        return _.filter(assets, asset => asset.category.includes("GOVERNMENT"));

      case "MANUFACTURING & ENGINEERING":
        return _.filter(assets, asset =>
          asset.category.includes("MANUFACTURING & ENGINEERING")
        );

      case "MATERIALS":
        return;
        _.filter(assets, asset => asset.category.includes("MATERIALS"));

      case "TECHNICAL CYCLE":
        return _.filter(assets, asset =>
          asset.category.includes("TECHNICAL CYCLE")
        );

      case "TECHNOLOGY":
        return _.filter(assets, asset => asset.category.includes("TECHNOLOGY"));

      default:
        return assets;
    }
  }
);
