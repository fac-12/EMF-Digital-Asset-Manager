import { createSelector } from "reselect";
import _ from 'lodash'
const getAssets = state => state.assets;
const selectedSubTag = state => state.subTags;
const selectedTagGroup = state => state.tags;

const getAll = createSelector(
    [getAssets],
    (assetFilter, assets) => {
        if (assetFilter.filter === "all"){
            return _.filter
        }
    }
)

}