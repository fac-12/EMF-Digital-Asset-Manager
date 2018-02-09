import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "lodash";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";

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
    let filteredAssets = filter(
      this.props.assets,
      asset =>
        asset.name
          .toLowerCase()
          .indexOf(
            (this.state.search.length !== 0
              ? this.state.search
              : this.props.search.searchValue || ""
            ).toLowerCase()
          ) !== -1
    );

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
          <CardDisplay assets={filteredAssets} end={"20"} />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ assets, tags, search }) => ({
  assets,
  tags,
  search
});
export default connect(mapStateToProps, actions)(DashboardPage);
