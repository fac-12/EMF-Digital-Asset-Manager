import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "lodash";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { addingCategoryToAsset } from "../../selectors/filters";
import CardDisplay from "../LandingPage/CardDisplay";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log("Dashboard", this.props.assets);
    // const assets = (assets, subTags, groupTag) => {
    //   console.log("subtags", Object.values(subTags));
    //   console.log("assets", Object.values(assets));
    //   console.log("groupTag", Object.values(groupTag));
    //   return assets.map(
    //     asset =>
    //       asset.tags.length > 0
    //         ? Object.assign(asset, {
    //             Category: Object.values(subTags)
    //               .map(elemSubTags =>
    //                 Object.assign(elemSubTags, {
    //                   category: Object.values(groupTag).filter(
    //                     elemGroupTags => elemSubTags.group === elemGroupTags.id
    //                   )[0].name
    //                 })
    //               )
    //               .filter(subTagElem => asset.tags.includes(subTagElem.id))
    //               .reduce((acc, cur) => acc.concat(cur.category), [])
    //           })
    //         : {}
    //   );
    // };

    // console.log(assets(this.props.assets, this.props.subTags, this.props.tags));

    // let filteredAssets = filter(
    //   this.props.assets,
    //   asset =>
    //     asset.name
    //       .toLowerCase()
    //       .indexOf(
    //         (this.state.search.length !== 0
    //           ? this.state.search
    //           : this.props.search.searchValue || ""
    //         ).toLowerCase()
    //       ) !== -1
    // );

    return (
      <div className="dashboard-container">
        <div className="dashboard-search-bar-container">
          <input
            className="dashboard-search-bar"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="How can I be more..."
          />
        </div>
        <ul className="tags-container">
          <FilterOptions tags={this.props.tags} />
        </ul>

        <ul className="dashboard-card-container">
          {/*<CardDisplay assets={filteredAssets} end={"20"} />*/}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assets: addingCategoryToAsset(state),
  tags: state.tags,
  search: state.search,
  subTags: state.subTags
});

export default connect(mapStateToProps, actions)(DashboardPage);
